import style from "./Hero.module.css";
import {useState, useEffect} from "react";

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
        <div className={style.container}>
            <div className={style.hero}>
                <div className={style.hero__left}>
                    <h3 className={style.hero__title}>{movie.Title}</h3>
                    <p className={style.hero__genre}>{movie.Gender}</p>
                    <p className={style.hero__description}>
                         {movie.Plot}
                    </p>
                    <button className={style.hero__button}>Watch</button>
                </div>
                <div className={style.hero__right}>
                    <img className={style.hero__image}  
                        src={movie.Poster}
                        alt="placeholder"
                     />
                </div>
            </div>
        </div>
    );
}

export default Hero;