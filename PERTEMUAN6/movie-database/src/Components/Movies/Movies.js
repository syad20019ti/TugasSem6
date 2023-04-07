
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../Utils/Constants/data";
import { useState } from "react";
import {nanoid} from "nanoid";

function Movies() {

  // const movies = data;
  const [movies, setMovie] = useState(data);

  function handleClick(){
    const movie = {
      id: nanoid(), 
      title: "Jigsaw",
      year: 2021, type: "Movie",
      poster:"https://picsum.photo/300/400",
    };

    // movies.push(movie);
    setMovie([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {

          }
          { movies.map((movie)=>{
              return <Movie key={movie.id} movie={movie}/>
            })
          }
        </div>
        <button onClick={handleClick}> Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;