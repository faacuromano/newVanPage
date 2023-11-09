import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logoVanguard.png';
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-logo">
          <a className="navbar-item" href="/">
            <img className="logo" src={logo} alt="Logo" />
            <h2 className="title-logo">ANGUARD</h2>
          </a>
        </ul>
        <div className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-item"><a id="right-navbar-items" href="/#artworks">Artworks</a></div>
          <div className="navbar-item"><a id="right-navbar-items" href="/#about">About</a></div>
          <div className="navbar-item"><a id="right-navbar-items" href="/#artist">Artist</a></div>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`}>
            <HiOutlineBars3/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
