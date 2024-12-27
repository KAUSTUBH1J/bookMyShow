import React, { useEffect } from 'react';
import MoviesCard from '../Templates/MoviesCard';
import {GetMovies} from '../../Function/ApiFunction';

export default function MoviesList() {

  const movies = [
    { 
      title: 'Avengers: Endgame', 
      category: 'Action', 
      img: 'https://via.placeholder.com/200x300?text=Avengers' 
    },
    { 
      title: 'Inception', 
      category: 'Sci-Fi', 
      img: 'https://via.placeholder.com/200x300?text=Inception' 
    },
    { 
      title: 'The Dark Knight', 
      category: 'Action', 
      img: 'https://via.placeholder.com/200x300?text=Dark+Knight' 
    },
    { 
      title: 'Interstellar', 
      category: 'Sci-Fi', 
      img: 'https://via.placeholder.com/200x300?text=Interstellar' 
    },
    { 
      title: 'Titanic', 
      category: 'Romance', 
      img: 'https://via.placeholder.com/200x300?text=Titanic' 
    },
    { 
      title: 'The Lion King', 
      category: 'Animation', 
      img: 'https://via.placeholder.com/200x300?text=Lion+King' 
    },
    { 
      title: 'Coco', 
      category: 'Animation', 
      img: 'https://via.placeholder.com/200x300?text=Coco' 
    },
    { 
      title: 'Parasite', 
      category: 'Thriller', 
      img: 'https://via.placeholder.com/200x300?text=Parasite' 
    },
    { 
      title: 'Joker', 
      category: 'Drama', 
      img: 'https://via.placeholder.com/200x300?text=Joker' 
    },
    { 
      title: 'Frozen', 
      category: 'Animation', 
      img: 'https://via.placeholder.com/200x300?text=Frozen' 
    },
  ];

  return (
    <div className="container my-4">

      <h2 className="text-center mb-4">Movies</h2>

      <div className="mb-4 ">
        <input type="text" className="form-control" placeholder="Search movie..."/>
      </div>

      <div className="row justify-content-around">
        {movies.map((movie, index) => (
          <MoviesCard key={index} img={movie.img} title={movie.title} category={movie.category} type="horizontal"/>
        ))}
      </div>

    </div>
  );

}
