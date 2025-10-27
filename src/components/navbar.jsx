// src/components/Navbar.jsx
import React from "react";
import "./navbar.css"
import bookshowlogo from "../assets/bookmys.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <img src={bookshowlogo} alt="BookMyShow Logo" style={styles.logo} />
      <div className="nav-list">
        <ul style={styles.ul}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/MovieDetails" style={styles.link}>Movie Details</Link></li>
          <li><Link to="/ShowDetails" style={styles.link}>Show Details</Link></li>
          <li><Link to="/checkout" style={styles.link}>Checkout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#0b0b0b",
    border:"2px solid transparent",
    color: "white",
    height:"80px",
  },
  logo: {
    height: "80px",
    objectFit: "contain",
  },
  ul: {
    display: "flex",
    gap: "18px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
  },
};

export default Navbar;
