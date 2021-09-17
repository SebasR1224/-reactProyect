import React from "react";
import { NavLink } from "react-router-dom";
const Header = () =>(
<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div className="container">
    <span><NavLink to="/" className="nav-link">Home</NavLink></span>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <span><NavLink className="nav-link" to="/contacto">Contacto</NavLink></span>
        </li>
        <li className="nav-item">
          <span><NavLink className="nav-link" to="/estudiantes">Estudiantes</NavLink></span>
        </li>
        <li className="nav-item">
          <span><NavLink className="nav-link" to="/personajes">Personajes</NavLink></span>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
);
export default Header;
