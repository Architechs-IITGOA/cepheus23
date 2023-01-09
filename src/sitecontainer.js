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
import "./sitecontainer.css";

const SiteContainer = () => {
  const [isProfileClicked, setProfileClicked] = useState(false);
  const [isUserRegistered, setUserRegistered] = useState(true);
  const [userdata, setUserdata] = useState({
    name: "",
    firstName: "",
    email: "",
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
        />
        <Profile
          isProfileClicked={isProfileClicked}
          auth_continue={authorisation_continue}
          auth_reset={authorisation_reset}
          userdata={userdata}
        />
        {/* <RegistrationPage userdata={userdata}/> */}
        {isUserRegistered ? null: <RegistrationPage isUserRegistered={isUserRegistered} userdata={userdata} setUserRegistered={setUserRegistered} setUserdata={setUserdata}/>}
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
