// import React from "react";
import React, { Component,useEffect,useState } from 'react'
import { gapi } from 'gapi-script';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "./Navbar.css"

export default function Navbar({handleProfileClick,successor,auth_start,auth_failure}) {
    const clientId = '433800136317-usopqpji8k1tu6u1pq1r2t689j091p65.apps.googleusercontent.com';
    // const [success,setsuccess] = useState(false);
    const responseGoogle = (response) => {
        console.log(response);
        auth_start();
        // setsuccess(true);
    }
    const responseGoogle1 = (response) => {
        console.log(response);
        auth_failure();
        // setsuccess(false);
    }
    return (
        <div className="navbar">
            <div class="navbar-logo">
                <img src="img/cepheus_logo.jfif" alt=""></img>
                <h2>CEPHEUS</h2>
                <p>'23</p>
            </div>
            <div className="navbar-items">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Events">Events</a>
                <a href="#Schedule">Schedule</a>
                <a href="#Sponsors">Sponsors</a>
                <a href="#Contact">Contact</a>
                <div style={successor?{display:'none'}:{display:'block'}}>
                <GoogleLogin 
                            render={renderProps => (
                                
                                <a href='#' style={{textDecoration:'none',color:'white'}} onClick={renderProps.onClick} disabled={renderProps.disabled} >Login/SignUp</a>
                            )}
                            clientId={clientId}
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            
                            onFailure={responseGoogle1}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            
                        />
                
                </div>
                {/* <div style={success?{display:'block'}:{display:'none'}}> */}
                <img style={successor?{display:'block'}:{display:'none'}} src="img/user_placeholder.png" alt="avatar" onClick={() => handleProfileClick()}></img>
                {/* </div> */}
            </div>
        </div>
    )
}
