import Hero from "../components/Hero";
import Globals from "../components/Globals";
import { useState } from "react";
import data from "../utils/constants/global";

function Home() {
  const [globals, setGlobals] = useState(data);

  return (
    <>
      <Hero />
      <Globals globals={globals} setGlobals={setGlobals} />
    </>
  );
}

export default Home;
