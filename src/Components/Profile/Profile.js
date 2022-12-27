import React from "react";
import "./Profile.css"

export default function Profile({isProfileClicked}) {
    return (
        <div class={isProfileClicked ? "profile profile-active" : "profile"}>
            <img src="" alt=""></img>
            <div class="profile-left">
                <img src="img/avatar1.png" alt="avatar" class="profile-image"></img>
                <img src="img/profile_name_border.png" alt="" class="name-border"></img>
                {/* style="height: 150px;width: 500px;" */}
                <p class="name"> Raghavendra Singh </p>
                <p> Indian Institute of Technology (IIT), Goa </p>
                <p> gstechnical@iitgoa.ac.in </p>
                <p> 9785075997 </p>
                <p class="score"> <span> Score </span> - 500 </p>
                {/* style="font-family: headerFont;" */}
            </div>
            <div className="profile-right">
                <div class="participated-events">
                    <h2>Participated Events</h2>
                    <ol>
                       <li>Treasure Hunt</li>
                       <li>Beat The Street</li>
                       <li>Hack Overflow</li>
                       <li>Bridge Builder</li>
                       <li>Front End Challange</li>
                       <li>Play With Microbit</li>
                    </ol>
                </div>
                <div className="profile-buttons">
                    <a class="edit">Edit Profile</a>
                    <a class="log-out">Log Out</a>
                </div>
            </div>
        </div>
    )
}