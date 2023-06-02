import StyledHero from "./Hero.Styled";
import {useState, useEffect} from "react";
import Button from "../Ui/Button/Button";

function Hero(){

    const[movie, setMovie]= useState("");

    //cara lama
    // useEffect(async() => {
    //     const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setMovie(data);
    // }, []);

    
    //cara baru
    useEffect(() => {
        async function fetchMovie(){
            const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
            const response = await fetch(url);
            const data = await response.json();
    
            setMovie(data);
        }

        fetchMovie();
    }, []);

    return(
            <StyledHero>
                <section>
                    <StyledHero>
                        <h2>{movie.Title}</h2>
                        <h3>{movie.Genre}</h3>
                        <p>{movie.Plot}</p>
                        <Button variant ="primary" font-size="lg" padding="lg">Watch</Button>
                    </StyledHero>
                    <StyledHero>
                         <img src={movie.Poster} alt={movie.Title}/>
                    </StyledHero>
                </section>
            </StyledHero>
    );
}

export default Hero;