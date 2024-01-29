import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav id="navigationLine">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/projects">
        Projects
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Header;
