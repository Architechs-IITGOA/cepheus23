import React from "react";
import "./SocialLinks.css"

export default function SocialLinks(){
    return (
        <div className="links">
            <div className="social-links">
                <a className="discord" target="_blank" href="https://discord.gg/jQsfbrtkzG" title="Cepheus Discord"><i class="fa-brands fa-discord"></i></a>
                <a className="instagram" href="https://www.instagram.com/cepheus_iitgoa/?hl=en" target="_blank"  title="Cepheus Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a className="twitter" href="https://twitter.com/cepheus_iitgoa?lang=en" target="_blank"  title="Cepheus Twitter"><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className="location-link">
                <a className="location" href="https://iitgoa.ac.in/wp-content/campus_map/" target="_blank" title="College Map"><i class="fa-solid fa-location-dot"></i></a>
            </div>
        </div>
        
    )
} 