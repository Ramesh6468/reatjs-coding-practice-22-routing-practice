import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="headerNav">
    <div className="HedaerContainer">
      <div className="imgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <p className="logoName">wave</p>
      </div>
      <ul className="navItemList">
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="home">
          <Link to="/about">About</Link>
        </li>
        <li className="home">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
