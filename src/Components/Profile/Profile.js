import React from "react";
import "./Profile.css"

export default function Profile({isProfileClicked}) {
    return (
        <div class={isProfileClicked ? "profile profile-active" : "profile"}>
            <div class="profile-left">
                <img src="avatars/21616081_100-01.png" alt="avatar"></img>
                <img src="Used Elements-20221127T203156Z-001/28509144_vector_badge_element_set_dd_badge_elements_collections-03.png" alt=""></img>
                {/* style="height: 150px;width: 500px;" */}
                <p class="name"> Raghavendra Singh </p>
                <p> Indian Institute of Technology (IIT), Goa </p>
                <p> gstechnical@iitgoa.ac.in </p>
                <p> 9785075997 </p>
                <p class="score"> <span> Score </span> - 500 </p>
                {/* style="font-family: headerFont;" */}
            </div>
            <div className="profile-right">

            </div>
        </div>
    )
}