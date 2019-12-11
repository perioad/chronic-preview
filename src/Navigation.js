import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="about">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/dates">Dates</Link>
        </li>
        <li>
          <Link to="/mixes">Mixes</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/read">Read</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
