import React, { useEffect, useState } from "react";
import Navbar from '../../Templates/Navbar';
import Sidebar from "../../Templates/SideBar/Sidebar";
import { GetMovies } from '../../../Function/ApiFunction';
import axios from "../../../Config/axiosConfig";

export default function Index() {
  

  const [movies, setMovies] = useState({
    title         : '',
    genre         : '',
    language      : '',
    release_date   : '', 
    duration      : '',
    description   : '', 
    files         : ''
  }); // Default state as an empty array
  const [error, setError] = useState({
    title         : '',
    genre         : '',
    language      : '',
    release_date   : '', 
    duration      : '',
    description   : '', 
    files         : ''
  }); // Default state as an empty array


  const handleChange = (e) =>{
    const { name, value, files } = e.target;
    setMovies((prevMovies) => ({
      ...prevMovies,
      [name]: files ? files[0] : value, // Handle file or text input
    }));

    // Remove error for the current field if the user modifies it
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
    
  }

  // Monitor changes in the movies state
  useEffect(() => {
    console.log("Movies updated:", movies);
  }, [movies]);

  const validation = () => {
    let hasError = false;
  
    const massage = {
      title: '',
      genre: '',
      language: '',
      release_date: '', 
      duration: '',
      description: '', 
      files: ''
    };
  
    if (!movies.title.trim()) {
      hasError = true;
      massage.title = "Title is required.";
    }
  
    if (!movies.genre.trim()) {
      hasError = true;
      massage.genre = "Genre is required.";
    }
  
    if (!movies.language.trim()) {
      hasError = true;
      massage.language = "Language is required.";
    }
  
    if (!movies.release_date) {
      hasError = true;
      massage.release_date = "Release date is required.";
    }
  
    if (!movies.duration || isNaN(movies.duration) || movies.duration <= 0) {
      hasError = true;
      massage.duration = "Duration must be a positive number.";
    }
  
    if (!movies.description.trim()) {
      hasError = true;
      massage.description = "Description is required.";
    }
  
    if (!movies.files) {
      hasError = true;
      massage.files = "Poster file is required.";
    }
  
    setError(massage); // Update errors in state
    return !hasError; // Return true if no errors
  };
  
  const SubmitMovie = async (e) =>{
    e.preventDefault();

    let isValidate = validation();
    if(isValidate){
      console.log('successfull');
      console.log(movies);

      const formData = new FormData();
      formData.append("title", movies.title);
      formData.append("genre", movies.genre);
      formData.append("language", movies.language);
      formData.append("release_date", movies.release_date);
      formData.append("duration", movies.duration);
      formData.append("description", movies.description);
      formData.append("files", movies.files); // Add the file

      try {
        const response = await axios.post('/api/v1/masters/movie/',formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
      } catch (error) {
        console.warn('error' + error);  
      }
    }
  }
  
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar pageName="Movies Master" pageLink="/Admin/movies" SubPageName ='Add Movie' subPageLike='Admin/movies/AddMovie'/>

        <div className="container mt-4">
          <h2 className="mb-4">Add Movie</h2>
          <div className="table-responsive">
            <form onSubmit={SubmitMovie} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className="form-control" value={movies.title} onChange={handleChange}   />
                {error.title && <small className="text-danger">{error.title}</small>}
              </div>
              
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input type="text" id="genre" name="genre" className="form-control" value={movies.genre} onChange={handleChange}   />
                {error.genre && <small className="text-danger">{error.genre}</small>}
              </div>
              
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <input type="text" id="language" name="language" className="form-control"  value={movies.language} onChange={handleChange}   />
                {error.language && <small className="text-danger">{error.language}</small>}
              </div>
              
              <div className="form-group">
                <label htmlFor="release_date">Release Date</label>
                <input type="date" id="release_date" name="release_date" className="form-control"  value={movies.release_date} onChange={handleChange}   />
                {error.release_date && <small className="text-danger">{error.release_date}</small>}
              </div>
              
              <div className="form-group">
                <label htmlFor="duration">Duration (in minutes)</label>
                <input type="number" id="duration" name="duration" className="form-control"  value={movies.duration} onChange={handleChange}   />
                {error.duration && <small className="text-danger">{error.duration}</small>}
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" className="form-control" rows="3"  value={movies.description} onChange={handleChange}   ></textarea>
                {error.description && <small className="text-danger">{error.description}</small>}

              </div>
              
              <div className="form-group">
                <label htmlFor="poster">Poster</label>
                <input type="file" id="poster" name="files" className="form-control-file" accept="image/*"  onChange={handleChange}    />
                {error.file && <small className="text-danger">{error.poster}</small>}
              </div>
              
              <button type="submit" className="btn btn-primary">Add Movie</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
