import React from "react";
import Card from "./Card.js"
import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact-us">
            <h1>Contact</h1>
            {/* <Card /> */}
            <div className="contact-first-layer">
                <Card />
                <Card />
                <Card />
            </div>
            <div className="contact-second-layer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="contact-carousal">

            </div>
        </div>
    )
}