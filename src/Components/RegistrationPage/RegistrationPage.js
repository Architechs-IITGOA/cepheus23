import React from "react";
import { useEffect } from "react";
import "./RegistrationPage.css"

export default function RegistrationPage({userdata, setUserRegistered, setUserdata}){
    const handleRegistrationData = async(e) => {
        setUserRegistered(true);
        e.preventDefault();
        console.log(e.target[0].value);
        await setUserdata((userdata) => ({
            ...userdata,
            gender: e.target[2].value,
            age: e.target[3].value,
            college: e.target[4].value,
            grade: e.target[5].value,
            mobile: e.target[6].value
        }));        
        // console.log(userdata);
    }

    return (
        <div className="registration">
            <h2>Please fill out this form to participate.</h2>
            <form action="post" onSubmit={(e) => handleRegistrationData(e)}>
                <label>Full Name</label><br></br>
                <input type="text" name="name" id="name" value={userdata.name} disabled/><br></br>
                <label>Email</label><br></br>
                <input type="email" name="email" id="email" value={userdata.email} disabled/><br></br>
                <label>Gender</label><br></br>
                <input type="text" name="gender" id="gender" placeholder="Enter your gender here" required/><br></br>
                <label>Age</label><br></br>
                <input type="number" name="age" id="age" placeholder="Enter your age here" required/><br></br>
                <label>College/School Name</label><br></br>
                <input type="text" name="college-school-name" id="clgsklname" placeholder="Enter your college/achool name here" required/><br></br>
                <label>Grade</label><br />
                <input type="text" name="grade" id="grade" placeholder="Enter your grade or program name here, e.g., BTech or 10th" required/><br />
                <label>Contact Number</label><br></br>
                <input type="text" name="contact" id="contact" placeholder="Enter your contact number here" required/><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}