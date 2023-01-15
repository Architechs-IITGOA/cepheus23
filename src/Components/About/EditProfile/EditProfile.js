
import React from "react";
import { useEffect } from "react";
import "./EditProfile.css"
import axios from "axios";
axios.defaults.withCredentials = true;

export default function EditProfile({isEditProfile, userdata, setEditProfile, setUserdata,success, error}){
    const HandleEditProfile = (e) => {
        setEditProfile(true);
        e.preventDefault();
        console.log(e.target[0].value);
        setUserdata((userdata) => ({
            ...userdata,
            gender: e.target[2].value,
            age: e.target[3].value,
            college: e.target[4].value,
            grade: e.target[5].value,
            mobile: e.target[6].value
        }));        
        console.log(userdata);
        // var grade_number;
        // if(e.target[5].value[0]<='9' && e.target[5].value[0]>='0'){
        console.log(e.target[2].value);
        var grade_number = parseInt(e.target[5].value);
        console.log(grade_number);

        // }
        axios.post("https://backendcepheus.cf/apiM2/register",
        {  
            // token: userdata.tokenId,
            user_name: userdata.name,
            college: e.target[4].value,
            mobile: e.target[6].value,
            grade: grade_number
        },
        {withCredentials: true})
        .then((res) => {
            console.log(res.data);
            success();
        })
        .catch((err) => {
            console.log(err);
            error();
        })
    }

    return (
        <div className="editprofile">
            <h2>Edit Profile</h2>
            <form action="post" onSubmit={(e) => HandleEditProfile(e)}>
                <label>Full Name</label><br></br>
                <input type="text" name="name" id="name"/><br></br>
                <label>Email</label><br></br>
                <input type="email" name="email" id="email" value={userdata.email} disabled/><br></br>
                <label>Gender</label><br></br>
                {/* <input type="text" name="gender" id="gender" placeholder="Enter your gender here" required/><br></br> */}
                <select name="gender" id="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select><br></br>
                {/* <label>Age</label><br></br>
                <input type="number" name="age" id="age" value = {userdata.age} required/><br></br> */}
                <label>College/School Name</label><br></br>
                <input type="text" name="college-school-name" id="clgsklname" required/><br></br>
                <label>Grade</label><br />
                <select name="grade" id="grade">
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                    <option value="13">B.Tech/ B.E./ B.Sc./ B.Com or equivalent</option>
                    <option value="14">M.Tech / M.Com / M. Sc. or equivalent</option>
                    <option value="15">PhD or equivalent</option>
                </select><br></br>
                {/* <input type="number" name="grade" id="grade" placeholder="Enter your grade or program name here, e.g., BTech or 10th" required/><br /> */}
                <label>Contact Number</label><br></br>
                <input type="text" name="contact" id="contact" required/><br></br>
                <button type="submit">Submit</button>
            </form>
            <button type="cancel" class="edit-cancel" onClick={() => setEditProfile(false)}>Cancel</button>
        </div>
    )
}