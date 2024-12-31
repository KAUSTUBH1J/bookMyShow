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
                  <th width="10%">Title</th>
                  <th width="10%">Genre</th>
                  <th width="10%">Language</th>
                  <th width="10%">Release Date</th>
                  <th width="10%">Duration (mins)</th>
                  <th width="20%">Description</th>
                  <th width="10%">Poster</th>
                  <th width="10%">Actions</th>
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
                      <td>{movie.release_date}</td>
                      <td>{movie.duration}</td>
                      <td><p>{movie.description}</p></td>
                      <td>
                        <img
                          src={
                            movie.poster && movie.poster.length > 0
                              ? `C:/Users/kaustubh.jadhav/Desktop/Git hub/Backend/BookMyShow/app/${movie.poster[0].file_path.replace(/[\[\]"]/g, "")}` // Update with your API base URL
                              : "https://via.placeholder.com/50"
                          }
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
