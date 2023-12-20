/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Navbar.css";
import Logo from '../../assets/Home/Se_1.png';
import { Link } from 'react-scroll';
import { PopupWidget } from 'react-calendly';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCalendy, setOpenCalendy] = useState(false)
  const openCalendly = () => {
    setOpenCalendy(true);
  }

  return (
    <>
      <nav>
        <div className="navbar-brand">
          <img src={Logo} alt="logo" className="logo"/>
        </div>
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li className="nav_hover">
          <Link
                to="home-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black", cursor:'pointer' }}

            >
                Home
            </Link>
          </li>
          <li className="nav_hover">
          <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black", cursor:'pointer' }}

            >
                About Us
            </Link>
          </li>
          <li className="nav_hover">
          <Link
                to="expertise-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black", cursor:'pointer' }}

            >
                Our Services
            </Link>
          </li>
          {/* <li className="nav_hover">
          <Link
                to="expertise-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black", cursor:'pointer' }}

            >
                Our Team
            </Link>
          </li> */}
          <li className="nav_hover">
          <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black", cursor:'pointer' }}

            >
                Contact Us
            </Link>
          </li>
          <li>
          <Link
            to="contact" // This scrolls to the section with id="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <button
              className="nav-button_1"
            >
              Get In Touch
            </button>
            </Link>
          </li>
          <li>
            <button
              className="nav-button_2"
              onClick={openCalendly}
            >
              Call Us Now
            </button>
            {openCalendy && (
        <PopupWidget
        url="https://calendly.com/codseedpak/30min"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#ffb703"
        onClose={() => setOpenCalendy(false)}
      />
      )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;