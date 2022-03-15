import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({setShowNav, showNav}) => {
    const handler = () => {
        setShowNav(showNav => !showNav);
        let bars = document.querySelector(".bars")
        let weak_nav = document.querySelector(".weak-nav")
        if(!showNav){
            bars.classList.add("open");
            weak_nav.classList.add("open");
        }
        else{
            bars.classList.remove("open");
            weak_nav.classList.remove("open");
        }
    }
    return(
        <div className="navbar p-4">
            <div className="navbar-brand">Company</div>
            <nav className="assoc">
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="menu-link">Home</Link></li>
                    <li className="nav-item"><Link to="/services" className="menu-link">Services</Link></li>
                    <li className="nav-item"><Link to="/about" className="menu-link">About Us</Link></li>
                    <li className="nav-item"><Link to="/contact" className="menu-link">Contact</Link></li>
                </ul>
            </nav>
            <div className="dessoc">
                <ul className="nav">
                    <li className="nav-item"><Link to="/login" className="login-btn">Login</Link></li>
                    <li className="nav-item"><Link to="/register" className="register-btn">Register</Link></li>
                </ul>
            </div>
            <div className="menu-bar" onClick={handler}><div className="bars"></div></div>
        </div>
    )
}
