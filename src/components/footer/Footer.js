import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const year = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className={isDark ? "dark-mode footer-div" : "footer-div"}>
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="footer-logo-bracket">&lt;</span>
            <span className="footer-logo-name">Shafi</span>
            <span className="footer-logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            Building great mobile experiences, one line at a time.
          </p>
          <div className="footer-links">
            <a href="#greeting">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-divider" />
          <p className="footer-copy">
            © {year} Shafi UL Islam · Designed &amp; built with passion
          </p>
        </div>
      </footer>
    </Fade>
  );
}
