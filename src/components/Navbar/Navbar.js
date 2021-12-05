import React from 'react';
import PropTypes from 'prop-types';
import Logo from "../Logo/Logo";
import ProfileIcon from "../Icons/ProfileIcon";
import ProfileNav from "../Icons/ProfileNav";
import "./Navbar.css";

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light overflow-hidden">
            <div className="container-fluid">
                <a className="navbar-brand px-3" href="#"><Logo fill={props.filler}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="d-flex justify-content-end">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-2">
                            <li className="nav-item">
                                <a className={`nav-link active fw-bold fs-5 px-3 ${props.className}`} aria-current="page"
                                   href="#">Find Your Service</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active fw-bold fs-5 px-3 ${props.className}`} aria-current="page"
                                   href="#">Find Your Space</a>
                            </li>
                            <li className="nav-item px-2 pt-2">
                                <button className="btn btn-nav-primary fw-bold text-white px-4">List Your Space</button>
                            </li>
                            <li className="nav-item px-2 pt-2">
                                <button className="btn btn-secondary fw-bold text-white px-4">List Your Service</button>
                            </li>
                            <li className="nav-item px-2 pt-2">
                                <a href="#"><ProfileNav/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes =
    {}
;

export default Navbar;

