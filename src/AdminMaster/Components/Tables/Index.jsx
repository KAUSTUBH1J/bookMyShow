import React, { useEffect, useState } from "react";
import Navbar from '../../Templates/Navbar';
import Sidebar from "../../Templates/SideBar/Sidebar";
import { GetMovies } from '../../../Function/ApiFunction';
import { Link } from "react-router-dom";
export default function Index() {
  const [movies, setMovies] = useState([]); // Default state as an empty array

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const response = await GetMovies(); // Await the API response
        console.log('Fetched Movies Detail:', response);
        setMovies(response || []); // Set response or fallback to an empty array
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMoviesDetails();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar pageName="Movies Master" />

        <div className="container mt-4">
          <h2 className="mb-4">Movies Master</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Language</th>
                  <th>Release Date</th>
                  <th>Duration (mins)</th>
                  <th>Description</th>
                  <th>Poster</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies && movies.length > 0 ? (
                  movies.map((movie, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{movie.title}</td>
                      <td>{movie.genre}</td>
                      <td>{movie.language}</td>
                      <td>{movie.releaseDate}</td>
                      <td>{movie.duration}</td>
                      <td>{movie.description}</td>
                      <td>
                        <img
                          src={`C:/Users/kaustubh.jadhav/Desktop/Git hub/Backend/BookMyShow/app/` + movie.poster[0].file_path || "https://via.placeholder.com/50"}
                          alt="Poster"
                          className="img-thumbnail"
                          width="50"
                        />
                      </td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No movies available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <Link to='/Admin/movies/AddMovie' className="btn btn-success mt-3">Add New Movie</Link>
          </div>
        </div>
      </main>
    </>
  );
}
