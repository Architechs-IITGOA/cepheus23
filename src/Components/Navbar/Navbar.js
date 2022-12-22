import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div class="navbar-logo">
                <img src="img/cepheus_logo.jfif" alt=""></img>
                <h2>CEPHEUS</h2>
                <p>'23</p>
            </div>
            <div className="navbar-items">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Events">Events</a>
                <a href="#Schedule">Schedule</a>
                <a href="#Sponsors">Sponsors</a>
                <a href="#Contact">Contact</a>
                <img src="img/user_placeholder.png" alt="avatar"></img>
            </div>
        </div>
    )
}