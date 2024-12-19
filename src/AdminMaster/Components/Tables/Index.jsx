import React from "react";
import Navbar from '../../Templates/Navbar';
import Sidebar from "../../Templates/SideBar/Sidebar";

export default function Index() {
  return (
    <>
      <Sidebar/>
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
                {/* Sample Row - Replace with dynamic data */}
                <tr>
                  <td>1</td>
                  <td>Sample Title</td>
                  <td>Action</td>
                  <td>English</td>
                  <td>2024-12-18</td>
                  <td>120</td>
                  <td>This is a sample movie description.</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/50"
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
              </tbody>
            </table>

            <button className="btn btn-success mt-3">Add New Movie</button>
          </div>
        </div>
      </main>
    </>
  );
}
