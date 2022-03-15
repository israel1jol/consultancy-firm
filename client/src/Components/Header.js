import React from "react";
import icon from "../media/aurium_Laptop_in_Line_Art.svg";

export const Header = () => {
    return (
        <div className="centered-div">
            <main>
                <div className="content-left">
                    <div className="display-4">
                        Reach out to us for your <span className="text-warning">tech</span> and <span className="text-warning">design</span> needs
                    </div>
                    <br />
                    <p className="lead">We offer a wide variety of services from web to graphics design and consulting.</p>
                    <div className="search">
                        <div className="d-flex bg-light">
                            <input type="text" name="service-search" id="service-search" className="form-control" placeholder="Enter a service"/>
                            <div className="search-btn">Search</div>
                        </div>
                        <div className="suggestions"></div>
                    </div> 
                </div>
                <div className="content-right">
                    <img src={icon} alt=""/>
                </div>
            </main>
        </div>
    )
}