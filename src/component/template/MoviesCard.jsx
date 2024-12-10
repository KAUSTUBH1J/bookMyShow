import React from 'react';
import styles from '../Style/movie.module.css';


const MoviesCard = (props) => {
  const cardClass = props.type === 'horizontal' 
  ? `${styles.movieCard} ${styles.horizontalMovie}` 
  : styles.movieCard;
  return (
    <> 
      <div className={cardClass}>
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