import AddMovieForm from "../Components/AddMovieForm/AddMovieForm";
import Hero from "../Components/Hero/Hero";
import Movies from "../Components/Movies/Movies";
import { useState } from "react";
import data from "../Utils/Constants/data";


function Home() {
    const [movies, setMovies] = useState(data);
    return (
      <>
        <Hero />
        <Movies movies={movies} setMovies={setMovies} />
        <AddMovieForm movies={movies} setMovies={setMovies} />
      </>
    );
  }

export default Home;