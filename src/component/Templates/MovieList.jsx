import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import MoviesCard from './MoviesCard';
import { Link } from 'react-router-dom';

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

  const scrollRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false); // Track manual scroll state

  useEffect(() => {
    let scrollInterval;

    // Auto-scroll logic
    if (!isUserScrolling) {
      
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          container.scrollLeft += 2;

          // Reset scroll when it reaches the end
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
          }
        }
      }, 40);
    }

    return () => clearInterval(scrollInterval); // Cleanup on unmount or when user scrolls
  }, [isUserScrolling]);

  // Handle user scroll interaction
  const handleScroll = () => {
    setIsUserScrolling(true);

    // Reset `isUserScrolling` after 2 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsUserScrolling(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  return (
    <>
      <MovieSection>
        <SectionTitle>
          <h3>Recommended Movies</h3>
          {/* <a href=""></a> */}
          <Link to="/movies">See All ›</Link>
        </SectionTitle>
        <MoviesContainer ref={scrollRef} onScroll={handleScroll}>
          {movies.map((movie, index) => (
           <MoviesCard  key={index} img={movie.img} title={movie.title} category={movie.category}  type="vertical"/>
          ))}
        </MoviesContainer>
      </MovieSection>
    </>
  );
};

const MovieSection = styled.section`
  margin: 10px 0;
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 24px;
    margin-left: 21px;
  }
  a {
    display: flex;
    align-items: center;
    margin: 0 21px;
    text-decoration: underline;
    color: #422be2;
    cursor: pointer;
  }
`;

const MoviesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden; /* Prevent vertical scrollbar */
  gap: 20px;
  padding: 20px;
  scroll-behavior: smooth;

  /* Add scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px; /* Only horizontal scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;





export default MovieList;
