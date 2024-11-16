import React from 'react';
import styled from 'styled-components';

const MovieList = () => {
const movies = [
    { title: 'Avengers: Endgame', category: 'Action', img: 'https://via.placeholder.com/200x300?text=Avengers' },
    { title: 'Inception', category: 'Sci-Fi', img: 'https://via.placeholder.com/200x300?text=Inception' },
    { title: 'The Dark Knight', category: 'Action', img: 'https://via.placeholder.com/200x300?text=Dark+Knight' },
    { title: 'Interstellar', category: 'Sci-Fi', img: 'https://via.placeholder.com/200x300?text=Interstellar' },
    { title: 'Titanic', category: 'Romance', img: 'https://via.placeholder.com/200x300?text=Titanic' },
    { title: 'The Lion King', category: 'Animation', img: 'https://via.placeholder.com/200x300?text=Lion+King' },
    { title: 'Coco', category: 'Animation', img: 'https://via.placeholder.com/200x300?text=Coco' },
    { title: 'Parasite', category: 'Thriller', img: 'https://via.placeholder.com/200x300?text=Parasite' },
    { title: 'Joker', category: 'Drama', img: 'https://via.placeholder.com/200x300?text=Joker' },
    { title: 'Frozen', category: 'Animation', img: 'https://via.placeholder.com/200x300?text=Frozen' },
    ];
    

  return (
    <>
        <SectionTitle>Recommended Movies</SectionTitle>
        <MoviesContainer>
        {movies.map((movie, index) => (
            <MovieCard key={index}>
            <MovieImage src={movie.img} alt={movie.title} />
            <MovieTitle>
                <h3>{movie.title}</h3>
                <p>{movie.category}</p>
            </MovieTitle>
            </MovieCard>
        ))}
        </MoviesContainer>
    </>
    
  );
};

const SectionTitle = styled.h3`
    font-size: 24px;
    margin-left: 21px;
`;

const MoviesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  scroll-behavior: smooth;

  /* Add scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

const MovieCard = styled.div`
  flex: 0 0 200px; /* Fixed width */
  height: 320px; /* Fixed height */
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  cursor:pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const MovieTitle = styled.div`

  h3{
    color: white;
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    text-align: center;
  }  
  p{
    color: white;
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    text-align: center;
  }
`;

export default MovieList;
