import React from "react";
import Container from "../../../../ui/Container/Container";
import "./Hero.scss";
import ReactLogo from "../../../../../assets/img/React-icon.svg";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <Container width="1340px" className="container">
        <div className="hero-block">
          <div className="black-box"></div>
          <div className="hero-description">
            <div className="hero-text">
              <h2>Hi, I am</h2>
              <h1>Azam Umarov</h1>
              <h3>Front-end developer</h3>
            </div>
            <div className="hero-socials">
              <a href="">
                <button>
                  <FaTelegramPlane color="black" />
                </button>
              </a>
              <a href="">
                <button>
                  <FaGithub color="black" />
                </button>
              </a>
              <a href="">
                <button>
                  <FaLinkedin color="black" />
                </button>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={ReactLogo} alt="React logotype" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
