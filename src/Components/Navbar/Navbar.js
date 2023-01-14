// import React from "react";
import React, { Component, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./Navbar.css";
import axios from "axios";
axios.defaults.withCredentials = true;

export default function Navbar({
  handleProfileClick,
  successor,
  auth_start,
  auth_failure,
  setUserdata,
  userdata,
  isMenuClicked,
  setMenuClicked,
  setUserRegistered
}) {
  const clientId = "218396342180-14tf81vkmg8a2iu06831pp8prl1k1669.apps.googleusercontent.com";


  useEffect(() => {
    const initClient = () => {
        gapi.client.init({
            clientId: clientId,
            scope: 'openid'
        });
    };
    gapi.load('client:auth2', initClient);
});

  const responseGoogle = (response) => {
    console.log(response);

    setUserdata((userdata) => ({
      ...userdata,
      name: response.profileObj.name,
      firstName: response.profileObj.givenName,
      email: response.profileObj.email,
      tokenId: response.tokenId
    }));
    auth_start();
    axios.post("https://backendcepheus.cf/apiM2/login",
    {idToken: response.tokenId},
    {withCredentials: true})
    .then((res) => {
      console.log(res.data);
      if(!res.data.registered){
        setUserRegistered(false);
      } else {
        setUserdata((userdata) => ({
          ...userdata,
          college: res.data.college,
          grade: res.data.grade,
          mobile: res.data.mobile,
        }));
        console.log(userdata);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    // handleLogin();
    // setsuccess(true);
  };
  const responseGoogle1 = (response) => {
    console.log(response);
    auth_failure();
    // setsuccess(false);
  };
  return (
    <div className="navbar">
      <div class="navbar-logo">
        <img src="img/cepheus_logo.jfif" alt=""></img>
        <h2>CEPHEUS</h2>
        <p>'23</p>
      </div>
      <div className="menu-button">
        <i class="fa-solid fa-bars" onClick={() => setMenuClicked(!isMenuClicked)}></i>
      </div>
      <div className={isMenuClicked ? "active navbar-items" : "navbar-items"}>
        <i class="fa-solid fa-xmark" onClick={() => setMenuClicked(false)}></i>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Events">Events</a>
        <a href="#Schedule">Schedule</a>
        <a href="#Sponsors">Sponsors</a>
        <a href="#Contact">Contact</a>
        <div style={successor ? { display: "none" } : { display: "inline-flex" }}>
          <GoogleLogin
            render={(renderProps) => (
              <a
                href="#"
                className="login-signup-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login/SignUp
              </a>
            )}
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle1}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
        {/* <div style={success?{display:'block'}:{display:'none'}}> */}
        <img
          style={successor ? { display: "block" } : { display: "none" }}
          src="img/user_placeholder.png"
          alt="avatar"
          onClick={() => handleProfileClick()}
        ></img>
        {/* </div> */}
      </div>
    </div>
  );
}
