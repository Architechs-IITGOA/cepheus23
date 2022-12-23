import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Schedule from "./Components/Schedule/Schedule";
import Sponsors from "./Components/Sponsors/Sponsors";
import Contact from "./Components/Contact/Contact";
import Profile from "./Components/Profile/Profile";

const SiteContainer = () => {

  const [isProfileClicked, setProfileClicked] = useState(false);

  const handleProfileClick = () => {
    setProfileClicked(!isProfileClicked);
  }
  return (
    <div >
      <Navbar handleProfileClick = {handleProfileClick}/>
      <Profile isProfileClicked = {isProfileClicked}/>
      <Home />
      <About />
      <Events />
      <Schedule />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default SiteContainer;
