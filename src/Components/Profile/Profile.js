
import React, { Component,useEffect,useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "./Profile.css"
import { gapi } from 'gapi-script';


export default function Profile({isProfileClicked,auth_reset,auth_continue,userdata}) {


    const clientId = '433800136317-usopqpji8k1tu6u1pq1r2t689j091p65.apps.googleusercontent.com';
    
    return (
        <div class={isProfileClicked ? "profile profile-active" : "profile"}>
            <img src="" alt=""></img>
            <div class="profile-left">
                <img src="img/avatar1.png" alt="avatar" class="profile-image"></img>
                <img src="img/profile_name_border.png" alt="" class="name-border"></img>
                
                <p class="name">{userdata.firstName}</p>
                <p>{userdata.college}</p>
                <p>{userdata.email}</p>
                <p>{userdata.mobile}</p>
                {/* <p class="score"> <span> Score </span> - 500 </p> */}
                
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
                    
                    <div>
                        
                        <div >
                        <a class="edit">Edit Profile</a>
                        <GoogleLogout
                        render={renderProps => (
                            <a class="log-out" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</a>
                        )}
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={() => {console.log('loggedout successfully');auth_reset()}}
                            onLogoutFailure={(err) => {console.log(err);auth_continue()}}
                        />
                        
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
