import axios from "axios";
import {useEffect, useState} from "react";
import Movies from "../../Components/Movies/Movies";

function Popular() {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;
    
    const [movies, setMovies] = useState([]);

    async function fetchPopularMovies(){

        const response = await axios(URL);

        setMovies(response.data.results);
    }

    useEffect(function(){
        fetchPopularMovies();
    }, []);

    return (
        <>
            <h2>Popular Movie</h2>
            <Movies movies={movies} setMovies={setMovies}/>
        </>
    );
  }
  
  export default Popular;
  