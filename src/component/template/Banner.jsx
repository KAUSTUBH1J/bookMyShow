import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Banner = () => {
  const [index, setIndex] = useState(0);
  const movies = [
    {
      index: 0,
      name: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      bannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IxYECmNKmZpygxaWRBbykqPdnD2fWRAAEQ&s'
    },
    {
      index: 1,
      name: 'The Dark Knight',
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      bannerImage: 'https://i.pinimg.com/736x/d7/dd/82/d7dd822a45f4eb2047bff669a14645ca.jpg'
    },
    {
      index: 2,
      name: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      bannerImage: 'https://w0.peakpx.com/wallpaper/95/351/HD-wallpaper-inception-idea-world-dream.jpg'
    },
    {
      index: 3,
      name: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      bannerImage: 'https://c4.wallpaperflare.com/wallpaper/255/723/808/the-godfather-al-pacino-michael-corleone-wallpaper-preview.jpg'
    },
    {
      index: 4,
      name: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary life story.',
      bannerImage: 'https://images7.alphacoders.com/111/1115209.jpg'
    }
  ];
  

  
  const handleSidle  = (action) => {
    if(action === 'Left'){
      if(index === 0 ){
        setIndex(movies.length-1);
      }
      else{
        setIndex(index-1);
      }
    }else if(action === 'Right'){
      if(index === movies.length-1 ){
        setIndex(0);
      }else{
        setIndex(index+1);
      }
      
    }
  }

  useEffect(()=>{
    const intervalId = setInterval(function() {
      if(index === movies.length-1 ){
        setIndex(0);
      }else{
        setIndex(index+1);
      }
    }, 8000);
    return () => clearInterval(intervalId); 
  });

  const currentMovie = () =>{
    return movies.find((movie) => movie.index === index);
  };
  const img = currentMovie().bannerImage;

  return (
    <BannerWrapper>
      <BannerImage  src={img}  alt="Featured Movie" />
 
      <BannerContent>
        <h2>{currentMovie().name}</h2>
        <p >{currentMovie().description}</p>
      </BannerContent>
      <IconWrapper>
        <FontAwesomeIcon icon={faAngleLeft} onClick={()=>handleSidle("Left")} />
        <FontAwesomeIcon icon={faChevronRight} onClick={()=>handleSidle("Right")} />
      </IconWrapper>

    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;`
;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease-in-out, opacity 0.5s;
`

;

const BannerContent = styled.div`
  position: absolute;
  top: 30%;
  left: 20px;
  color: white;

  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 0 0 40px black;
  }

  p {
    font-size: 18px;
    max-width: 600px;
    text-shadow: 0 0 40px #4b4b4b;
  }`
;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  

  svg {
    font-size: 24px; /* Adjust size as needed */
    color: white; /* Icon color */
    cursor: pointer;
    &:hover {
    transform: scale(1.05);
  }
  }`
;

export default Banner;