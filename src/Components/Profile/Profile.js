// import React from "react";
import React, { Component,useEffect,useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "./Profile.css"
import { gapi } from 'gapi-script';
// import GoogleBtn from './GoogleBtn'
// import { useGoogleLogin } from '@react-oauth/google';

export default function Profile({isProfileClicked}) {


    const clientId = '433800136317-usopqpji8k1tu6u1pq1r2t689j091p65.apps.googleusercontent.com';
    const [success,setsuccess] = useState(false);
    const responseGoogle = (response) => {
        console.log(response);
        setsuccess(true);
    }
    const responseGoogle1 = (response) => {
        console.log(response);
        setsuccess(false);
    }
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    function setter(){
        setsuccess(true);
    }
    // 
    return (
        <div class={isProfileClicked ? "profile profile-active" : "profile"}>
            <img src="" alt=""></img>
            <div class="profile-left">
                <img src="img/avatar1.png" alt="avatar" class="profile-image"></img>
                <img src="img/profile_name_border.png" alt="" class="name-border"></img>
                {/* style="height: 150px;width: 500px;" */}
                <p class="name"> Raghavendra Singh </p>
                <p> Indian Institute of Technology (IIT), Goa </p>
                <p> gstechnical@iitgoa.ac.in </p>
                <p> 9785075997 </p>
                <p class="score"> <span> Score </span> - 500 </p>
                {/* style="font-family: headerFont;" */}
            </div>
            <div className="profile-right">
                <div class="participated-events">
                    <h2>Participated Events</h2>
                    <ol>
                       <li>Treasure Hunt</li>
                       <li>Beat The Street</li>
                       <li>Hack Overflow</li>
                       <li>Bridge Builder</li>
                       <li>Front End Challange</li>
                       <li>Play With Microbit</li>
                    </ol>
                </div>
                <div className="profile-buttons">
                    {/* <a class="edit">Edit Profile</a> */}
                    {/* <a class="log-out" onClick={login()}>Log In</a> */}
                    <div>
                        <div className={success?'hide':'show'}>
                            
                            
                        
                        <GoogleLogin 
                            render={renderProps => (
                                <a class="log-out" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log In/Sign Up</a>
                            )}
                            clientId={clientId}
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            
                            onFailure={responseGoogle1}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                        </div>
                        <div className={success?'show':'hide'}>
                        <a class="edit">Edit Profile</a>
                        <GoogleLogout
                        render={renderProps => (
                            <a class="log-out" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</a>
                        )}
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={() => {console.log('loggedout successfully');setsuccess(false)}}
                            onLogoutFailure={(err) => {console.log(err);setsuccess(true)}}
                        />
                        
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
