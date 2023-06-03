import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import {nanoid} from "nanoid";

function Movies(props) {

  
  // const movies = data;
  const {movies, setMovies} = props;

  function handleClick(){
    const movie = {
      id: nanoid(), 
      title: "Jigsaw",
      year: 2021, type: "Movie",
      poster:"https://picsum.photo/300/400",
    };

    // movies.push(movie);
    setMovies([...movies, movie]);
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