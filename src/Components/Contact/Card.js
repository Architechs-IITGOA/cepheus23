import React from "react";
import "./Card.css"

export default function Card() {
    return (
        <>
           <div className="contact-card">
                <div className="border-div">
                    <div className="contact-card-visible">
                        <img src="img/temp.jpeg" alt="user" className="contact-image"></img>
                    </div>
                </div>
                <div className="contact-card-hover">
                </div>
           </div>
        </>
    )
}