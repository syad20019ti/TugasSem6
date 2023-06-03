import axios from "axios";
import {useEffect, useState} from "react";
import Movies from "../../Components/Movies/Movies";

function NowPlayingMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}`;
    
    const [movies, setMovies] = useState([]);

    async function fetchNowPlayingMovies(){

        const response = await axios(URL);

        setMovies(response.data.results);
    }

    useEffect(function(){
        fetchNowPlayingMovies();
    }, []);

    return (
        <>
            <h2>Now Playing Movie</h2>
            <Movies movies={movies} setMovies={setMovies}/>
        </>
    );
  }
  
  export default NowPlayingMovie;