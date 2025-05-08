import React, { useContext, useState } from "react";
import "./Menubar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Menubar = () => {
  const [active, setActive] = useState('home');

  const{quantities, token, setToken, setQuantities} = useContext(StoreContext);

  const uniqueItemsInCart = Object.values(quantities).filter(qty => qty > 0).length;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken("");
    setQuantities({});
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Foodies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={active === 'home' ? "nav-link" : "nav-link"} to="/" onClick={() => setActive('home')}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === 'explore-food' ? "nav-link fw-bold" : "nav-link"} to="/explore-food" onClick={() => setActive('explore-food')}>
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === 'contact-us' ? "nav-link fw-bold" : "nav-link"} to="/contact-us" onClick={() => setActive('contact-us')}>
                Contact us
              </Link>
            </li>
          </ul>
          <div className="menubar-right">
            <Link to={`/cart`}>
              <div className="position-relative">
                <i className="bi bi-cart4 fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {uniqueItemsInCart}
                </span>
              </div>
            </Link>

            {
              !token ? <>            <button className="btn btn-outline-primary" onClick={() => navigate('/login')}>Login</button>
            <button className="btn btn-outline-success" onClick={() => navigate('/register')}>Register</button></> : 
            <div className="dropdown text-end">
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person fs-5"></i>
                </a>
                <ul className="dropdown-menu text-small">
                  <li className="dropdown-item" onClick={() => navigate("myorders")}>Orders</li>
                  <li className="dropdown-item" onClick={logout}>Logout</li>
                  </ul></div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
