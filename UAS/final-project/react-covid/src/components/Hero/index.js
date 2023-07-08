import StylesHero from "./Hero.styled.js";
import image from "../asset/heroIndex.png";

function Hello() {
  return (
    <StylesHero>
      <section>
        <div className="hello__left">
          <h2>Covid ID</h2>
          <h3>Monitoring Perkembangan Covid</h3>
          <p>
            Penyakit virus corona (COVID-19) adalah penyakit menular yang
            disebabkan oleh virus SARS-CoV-2. Sebagian besar orang yang tertular
            COVID-19 akan mengalami gejala ringan hingga sedang, dan akan pulih
            tanpa penanganan khusus. Namun, sebagian orang akan mengalami sakit
            parah dan memerlukan bantuan medis.
          </p>
          <button>
            <a href="https://vaksin.kemkes.go.id/#/vaccines">Vaccine</a>
          </button>
        </div>
        <div className="hello__right">
          <img src={image} alt="placeholder" />
        </div>
      </section>
    </StylesHero>
  );
}

export default Hello;
