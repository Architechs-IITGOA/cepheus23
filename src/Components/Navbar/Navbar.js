import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Events">Events</a>
                <a href="#Schedule">Schedule</a>
                <a href="#Sponsors">Sponsors</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className="navbar-profile">
                <img src="img/user_placeholder.png"></img>
            </div>
        </div>
    )
}