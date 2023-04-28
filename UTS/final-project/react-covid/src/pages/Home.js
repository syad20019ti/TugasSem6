import Footer from "../components/Footer";
import FormCovid from "../components/FormCovid";
import Globals from "../components/Globals";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import Provinces from "../utils/constants/provinces";
import { useState } from "react";

function Main() {

  const [provinsi, setProvinsi] = useState(Provinces.provinces);

  return (
    <main>
      <Hello />
      <Globals/>
      <Provinsi/>
      <FormCovid provinsi={provinsi} setProvinsi={setProvinsi} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
