import './Navbar.css';

import logo from '../../assets/logoVanguard.png'

const Navbar = () => {
  return (
      <>
        <nav className="navbar">
        <ul className="navbar-logo">
            <a className="navbar-item" href="/">
                <img className='logo' src={logo}/>
                <h2 className='title-logo'>ANGUARD</h2>
            </a>
        </ul>
            <div className="navbar-list">
                <div className="navbar-item"><a href="/artworks">Artworks</a></div>
                <div className="navbar-item"><a href="/about">About</a></div>
                <div className="navbar-item"><a href="/artist">Artist</a></div>
            </div>
        </nav>
      </>
  );
};

export default Navbar;
