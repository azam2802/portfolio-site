import Container from "../../ui/Container/Container";
import LogoBlack from "../../../assets/img/logo-black.png";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <Container width="1340px">
      <header>
        <div className="header">
          <Link to="/">
            <img src={LogoBlack} alt="LOGO" />
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contacts" id="btn-contact">Contact Me</Link>
          </nav>
        </div>
      </header>
    </Container>
  );
};

export default Header;
