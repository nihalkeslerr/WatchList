import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">   

          <div className="brand">
            <Link to="/add">
             <div>Plan To Watch</div></Link>
          </div>
          <ul className="nav-links">
            <li>
            <Link to="/">To Watch</Link>
            </li>
            <li>
              <Link to="/Watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>


        </div>
      </div>
    </header>
  );
}

export default Header;
