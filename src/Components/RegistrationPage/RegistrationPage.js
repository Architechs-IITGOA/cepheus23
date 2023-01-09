import React from "react";
import "./RegistrationPage.css"

export default function RegistrationPage({userdata}){
    return (
        <div className="registration">
            <h2>Thank you so much for registering yourself in our fest. Please fill out this form to tell us more about you.</h2>
            <form action="">
                <label>Full Name</label><br></br>
                <input type="text" name="name" id="name" placeholder={userdata.name} readOnly/><br></br>
                <label>Email</label><br></br>
                <input type="email" name="email" id="email" placeholder={userdata.email} readOnly/><br></br>
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
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}