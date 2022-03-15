import React from "react";
import { Link } from "react-router-dom";

export const ResponsiveNav = ({ showNav }) => {
    return (
        <nav className="weak-nav">
            <div className="responsive-nav">
                <div className="d-flex align-items-center justify-content-center vh-100 ">
                    <div className="navbar-nav">
                        <Link to="/" className="responsive-nav-link">Home</Link>
                        <Link to="/services" className="responsive-nav-link">Services</Link>
                        <Link to="/about" className="responsive-nav-link">About Us</Link>
                        <Link to="/contact" className="responsive-nav-link">Contact Us</Link>
                        <Link to="/login" className="responsive-nav-link">Login</Link>
                        <Link to="/register" className="responsive-nav-link">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}