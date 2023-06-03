import StyledHero from "./Hero.Styled";
import {useState, useEffect} from "react";
import Button from "../Ui/Button/Button";
import axios from "axios";

function Hero(){

    const[movie, setMovie]= useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;

    const genres = movie && movie.genres.map((genre)=>genre.name).join(", ");
    const idTrailer = movie && movie.videos.results[0].key;

    async function fetchTrendingMovie(){
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios(URL);

        return response.data.results[0];
    }

    async function getDetailMovie(){
        const trendingMovie = await fetchTrendingMovie();

        const id = trendingMovie.id;

        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

        const response = await axios(URL);

        setMovie(response.data);
    }

    useEffect(() => {
        getDetailMovie();
    }, []);

    return(
            <StyledHero>
                <section>
                    <StyledHero>
                        <h2>{movie.title}</h2>
                        <h3>{genres}</h3>
                        <p>{movie.overview}</p>
                        <Button as= "a"
                         href={`https://www.youtube.com/watch?v=${idTrailer}`}
                         target="_blank" variant ="primary" font-size="lg" padding="lg">Watch</Button>
                    </StyledHero>
                    <StyledHero>
                         <img src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/>
                    </StyledHero>
                </section>
            </StyledHero>
    );
}

export default Hero;