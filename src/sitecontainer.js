import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Schedule from "./Components/Schedule/Schedule";
import Sponsors from "./Components/Sponsors/Sponsors";
import Contact from "./Components/Contact/Contact";
import Profile from "./Components/Profile/Profile";
import "./sitecontainer.css";

const SiteContainer = () => {

  const [isProfileClicked, setProfileClicked] = useState(false);

  const handleProfileClick = () => {
    setProfileClicked(!isProfileClicked);
  }
  const [success,setsuccess] = useState(false);

  const handleBodyClick = () => {
    setProfileClicked(false);
  }
  const authorisation_reset = ()=>{
    setProfileClicked(false);
    setsuccess(false);
}
const authorisation_continue = ()=>{
    setsuccess(true);
}
const authorisation_start = () =>{
  setsuccess(true);
}
const authorisation_failure = () =>{
  setsuccess(false);
}

  return (
    <div>
      <div>
        <Navbar handleProfileClick = {handleProfileClick} successor={success} auth_start={authorisation_start} auth_failure={authorisation_failure}/>
        <Profile isProfileClicked = {isProfileClicked} auth_continue={authorisation_continue} auth_reset={authorisation_reset} />
      </div>
      <div onClick={() => handleBodyClick()} class={isProfileClicked? "blur noblur" : "noblur"}>
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
