import React from "react";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title"> Blog</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
