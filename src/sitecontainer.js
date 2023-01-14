import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Schedule from "./Components/Schedule/Schedule";
import Sponsors from "./Components/Sponsors/Sponsors";
import Contact from "./Components/Contact/Contact";
import Profile from "./Components/Profile/Profile";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";
import EditProfile from "./Components/About/EditProfile/EditProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sitecontainer.css";

const link_initial = "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_120/v16736772"

const avatar_male = [
  {
    link: "56/chepheus/1_rbtjby.webp",
  },
  {
    link: "56/chepheus/2_vg5lak.webp",
  },
  {
    link: "55/chepheus/3_i0qt4w.webp",
  },
  {
    link: "69/chepheus/4_dhsyqx.webp",
  },
  {
    link: "60/chepheus/5_j5gsa6.webp",
  },
  {
    link: "54/chepheus/6_qbnzbw.webp",
  },
];
const avatar_female = [
  {
    link: "63/chepheus/7_vtxwjn.webp",
  },
  {
    link: "57/chepheus/8_ng6pcu.webp",
  },
  {
    link: "57/chepheus/9_ci9c7p.webp",
  },
  {
    link: "59/chepheus/10_q1oypc.webp",
  },
  {
    link: "64/chepheus/11_lvx5xc.webp",
  },
  {
    link: "67/chepheus/12_zz8wuo.webp",
  },
];

const SiteContainer = () => {
  const [isProfileClicked, setProfileClicked] = useState(false);
  const [isUserRegistered, setUserRegistered] = useState(true);
  const [isEditProfile, setEditProfile] = useState(false);
  const [userdata, setUserdata] = useState({
    name: "",
    firstName: "",
    email: "",
    imgurl: ""
  });

  const handleProfileClick = () => {
    setProfileClicked(!isProfileClicked);
  };
  const [success, setsuccess] = useState(false);
  const [isMenuClicked, setMenuClicked] = useState(false);

  const handleBodyClick = () => {
    setProfileClicked(false);
    setMenuClicked(false);
  };
  const authorisation_reset = () => {
    setProfileClicked(false);
    setsuccess(false);
  };
  const authorisation_continue = () => {
    setsuccess(true);
  };
  const authorisation_start = () => {
    setsuccess(true);
  };
  const authorisation_failure = () => {
    setsuccess(false);
  };
  const success_toast = () => toast.success("Registration Successful!");
  const reg_failed = () => toast.error("Registration Failed! Please try again");
  // const wrong_mail = () => toast.warning("Please enter a valid email");
  const error = () => toast.error("Error occurred! Please try again.");
  return (
    <div>
      <div>
        <Navbar
          handleProfileClick={handleProfileClick}
          successor={success}
          auth_start={authorisation_start}
          auth_failure={authorisation_failure}
          setUserdata={setUserdata}
          userdata={userdata}
          isMenuClicked={isMenuClicked}
          setMenuClicked={setMenuClicked}
          setUserRegistered={setUserRegistered}
          success={success}
          reg_failed={reg_failed}
          error={error}
        />
        <Profile
          isProfileClicked={isProfileClicked}
          auth_continue={authorisation_continue}
          auth_reset={authorisation_reset}
          userdata={userdata}
          setEditProfile={setEditProfile}
          setProfileClicked={setProfileClicked}
        />
        {/* <RegistrationPage userdata={userdata}/> */}
        {isEditProfile ? (
          <EditProfile
            isEditProfile={isEditProfile}
            userdata={userdata}
            setEditProfile={setEditProfile}
            setUserdata={setUserdata}
            success={success_toast}
            reg_failed={reg_failed}
            error={error}
          />
        ) : null}
        {/* <RegistrationPage isUserRegistered={isUserRegistered} userdata={userdata} setUserRegistered={setUserRegistered} setUserdata={setUserdata} success={success_toast} 
          reg_failed={reg_failed}
          error={error}
          avatar_female = {avatar_female}
            avatar_male = {avatar_male}/> */}
        {isUserRegistered ? null : (
          <RegistrationPage
            isUserRegistered={isUserRegistered}
            userdata={userdata}
            setUserRegistered={setUserRegistered}
            setUserdata={setUserdata}
            success={success_toast}
            reg_failed={reg_failed}
            error={error}
            avatar_female = {avatar_female}
            avatar_male = {avatar_male}
          />
        )}
      </div>
      <div
        onClick={() => handleBodyClick()}
        class={isProfileClicked ? "blur noblur" : "noblur"}
      >
        <Home />
        <About />
        <Events />
        <Schedule />
        <Sponsors />
        <Contact />
      </div>
    </div>
  );
};

export default SiteContainer;

// const requestOptions = {
//       method: "POST",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "http://10.196.7.175:3000",
//       },
//       // body: JSON.stringify({name: userdata.name, mail: userdata.email, idToken: userdata.tokenId}),
//       body: JSON.stringify({ idToken: userdata.tokenId }),
//     };

//     // ToggleClass(e);
//     // e.preventDefault();

//     try {
//       const login_route = apikey + "/login";
//       const res = await fetch(login_route, requestOptions);
//       const data = await res.json();
//       console.log(data);
//       // if (data.success) {
//       //   console.log(data);
//       //   console.log("success");
//       // } else {
//       //   console.log("reg failed");
//       // }
//     } catch (err) {
//       console.log(err);
//     }
