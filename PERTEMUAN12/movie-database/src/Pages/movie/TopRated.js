import axios from "axios";
import {useEffect, useState} from "react";
import Movies from "../../Components/Movies/Movies";

function TopRated() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`;
    
    const [movies, setMovies] = useState([]);

    async function fetchTopRatedMovies(){

        const response = await axios(URL);

        setMovies(response.data.results);
    }

    useEffect(function(){
        fetchTopRatedMovies();
    }, []);


    return (
        <>
            <h2>Top Rated</h2>
            <Movies movies={movies} setMovies={setMovies}/>
        </>
    );
  }
  
  export default TopRated;