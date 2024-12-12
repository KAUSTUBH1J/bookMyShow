import React from 'react';
import styles from '../Style/movie.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ShowPopUp } from "../../Store/Movie/movie";

const MoviesCard = (props) => {
  const Dispatch = useDispatch();
  const cardClass = props.type === 'horizontal' ? `${styles.movieCard} ${styles.horizontalMovie}` : styles.movieCard;

  
  const handleClick = () => {
    Dispatch(ShowPopUp({props}));
  }
  return (
    <> 
      <div className={cardClass} onClick={handleClick}>
        <img className={styles.movieImage} src={props.img} alt={props.title} />
        <div className={styles.movieTitle}>
          <h3>{props.title}</h3>
          <p>{props.category}</p>
        </div>
      </div>
    </>
  )
};




export default MoviesCard;