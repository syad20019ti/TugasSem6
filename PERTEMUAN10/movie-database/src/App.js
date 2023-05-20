
// //import './App.css';
// //import Hello from './Components/Hello';
// import Header from './Components/Header';
// import Main from './Components/Main';
// import Footer from './Components/Footer';

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import CreateMovie from "./Pages/movie/Create";
import NowPlaying from "./Pages/movie/NowPlaying";
import Popular from "./Pages/movie/Popular";
import TopRated from "./Pages/movie/TopRated";


// <div>
// <Header/>
// <Main/>
// <Footer/>
// </div>

function App() {  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
          <Route path="/movie/top-rated" element={<TopRated />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
