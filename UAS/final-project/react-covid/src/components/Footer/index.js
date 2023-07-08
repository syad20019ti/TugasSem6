import StyledFooter from "./Footer.styled";
import { Link } from "react-router-dom";

function index() {
  return (
    <StyledFooter>
      <footer>
        <div>
          <h1>Covid ID</h1>
          <p>Developer by Sya'diyah Nur Fawwaz</p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/covid/province">Province</Link>
            </li>
            <li>
              <Link to="/covid/about">About</Link>
            </li>
          </ul>
        </div>
      </footer>
    </StyledFooter>
  );
}

export default index;
