
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import CreateMovie from "./Pages/movie/Create";
import NowPlaying from "./Pages/movie/NowPlaying";
import Popular from "./Pages/movie/Popular";
import TopRated from "./Pages/movie/TopRated";
import { ThemeProvider } from "styled-components";
import theme from "./Utils/Constants/theme";

function App() {  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
            <Route path="/movie/top-rated" element={<TopRated />}></Route>
          </Routes>
      </Layout>
    </ThemeProvider>
      
    </>
  );
}

export default App;
