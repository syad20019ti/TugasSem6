import StyledMovie from "./Movie.styled";

function Movie(props){

    const {movie} = props;
    
    return(
        <StyledMovie>
            <img src={movie.poster} alt={movie.title} />
            <h3> Movie Title </h3>  
            <p> Date Title </p>
        </StyledMovie>
    );
}

export default Movie;