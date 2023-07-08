import Global from "../Global";
import data from "../../utils/constants/indonesia";
import StyledGlobals from "./Globals.styled.js";

function Globals() {
  const globals = data.indonesia;

  return (
    <StyledGlobals>
      <section>
        <h2>Indonesia</h2>
        <h3>Data Covid Berdasarkan Global</h3>
        <div className="cardcovid__container">
          {globals.map(function (global, key) {
            return <Global key={key} global={global} />;
          })}
        </div>
      </section>
    </StyledGlobals>
  );
}

export default Globals;
