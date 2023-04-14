import AddMovieForm from "../Components/AddMovieForm/AddMovieForm";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Movies from "../Components/Movies/Movies";
import Navbar from "../Components/Navbar/Navbar";

function Main(){
    return(
        <main>
            <Hero/>
            <Movies/>
            <AddMovieForm/>
        </main>
    );
}

function Home(){
    return(
        <>
            <Navbar/>
            <Main/>
            <Footer/>
        </>
    );
}

export default Home;