import React, { useEffect, useState } from "react";
import Navbar from '../../Templates/Navbar';
import Sidebar from "../../Templates/SideBar/Sidebar";
import { GetMovies } from '../../../Function/ApiFunction';

export default function Index() {
  
  const Fields = {
    title         : '',
    genre         : '',
    language      : '',
    releaseDate   : '', 
    duration      : '',
    description   : '', 
    files         : ''
  }

  const [movies, setMovies] = useState(Fields); // Default state as an empty array
  const [error, setError] = useState(Fields); // Default state as an empty array


  const handleChange = (e) =>{
    const value = e.target.value;
    setMovies({
      ...movies,
      [e.target.name]: value
    });
  }

  // Monitor changes in the movies state
  useEffect(() => {
    console.log("Movies updated:", movies);
  }, [movies]);

  const validation = () => {
    const error = true;

    const massage = {
      title         : '',
      genre         : '',
      language      : '',
      releaseDate   : '', 
      duration      : '',
      description   : '', 
      files         : ''
    }

    if(movies.title){
      error = false;
      massage.title =  'please Enter the title of Movie'; 
    }
    if (!movies.title.trim()){
      massage.title = "Title is required.";
    } 
    if (!movies.genre.trim()){
      massage.genre = "Genre is required.";
    } 
    if (!movies.language.trim()){
      massage.language = "Language is required.";
    } 
    if (!movies.releaseDate){
      massage.releaseDate = "Release date is required.";
    } 
    if (!movies.duration || isNaN(movies.duration) || movies.duration <= 0) {
      massage.duration = "Duration must be a positive number.";
    }
    if (!movies.description.trim()) {
      massage.description = "Description is required.";
    }
    if (!movies.files){
      massage.files = "Poster file is required.";
    } 
    setError(massage);

    return error;
  }
  const SubmitMovie = (e) =>{
    e.preventDefault();

    const isValidate = validation();
    console.log(error);
    console.log(isValidate);
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
                <input type="text" id="title" name="title" className="form-control" value={movies.title} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input type="text" id="genre" name="genre" className="form-control" value={movies.genre} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <input type="text" id="language" name="language" className="form-control"  value={movies.language} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="releaseDate">Release Date</label>
                <input type="date" id="releaseDate" name="releaseDate" className="form-control"  value={movies.releaseDate} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="duration">Duration (in minutes)</label>
                <input type="number" id="duration" name="duration" className="form-control"  value={movies.duration} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" className="form-control" rows="3"  value={movies.description} onChange={handleChange}  required></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="poster">Poster</label>
                <input type="file" id="poster" name="poster" className="form-control-file" accept="image/*" required />
              </div>
              
              <button type="submit" className="btn btn-primary">Add Movie</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
