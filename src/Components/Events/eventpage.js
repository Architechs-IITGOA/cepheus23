import "./Events.css";
import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { useEffect } from "react";
// import axios from "axios";
import axios from "axios";
axios.defaults.withCredentials = true;

export default function Eventcard({userdata, data,success_createteam,success_jointeam,success_regevent,error,setUserdata, exiting }) {
  const teamSize = data.teamsize;
  const [create, setcreate] = useState(false);
  const [join, setjoin] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [createTeamName, setCreateTeamName] = useState("");
  const [displayteamcode, setdisplayteamcode] = useState(false);
  // const [createTeamNameind, setCreateTeamNameind] = useState("");
  const [joinTeamCode, setJoinTeamCode] = useState("");
  const [display_team_code,setdisplay_team_code] = useState("");

  const handleTeamCreation = (e) => {
    e.preventDefault();
    setconfirm(true);
    let teamcode;
    axios
      .post(
        "https://backendcepheus.cf/apiM2/createteam",
        {
          event_id: data.id,
          team_name: createTeamName,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        teamcode = res.data.team_code;
        // success();
        axios
      .post(
        "https://backendcepheus.cf/apiM2/regevent",
        {
          event_id: data.id,
          team_code: teamcode,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setdisplay_team_code(teamcode);
        setdisplayteamcode(true);
        axios.post("https://backendcepheus.cf/apiM2/getreg",
          {},
          {withCredentials: true})
          .then((res) => {
            console.log(res.data);
            setUserdata((userdata) => ({
              ...userdata,
              regevents: res.data.regevents
            }))
          })
          .catch((err) => {
            console.log(err);
          })
        success_createteam();
        // success();
      })
      .catch((err) => {
        console.log(err);
        error(err.response.data.message);
      });
      })
      .catch((err) => {
        console.log(err);
        error(err.response.data.message);
      });

      
  };
  const handleTeamCreationind = (e) => {
    e.preventDefault();
    let teamcodeind;
    axios
      .post(
        "https://backendcepheus.cf/apiM2/createteam",
        {
          event_id: data.id,
          team_name: userdata.email,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        teamcodeind = res.data.team_code;

        // success();
        axios
      .post(
        "https://backendcepheus.cf/apiM2/regevent",
        {
          event_id: data.id,
          team_code: teamcodeind,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        success_regevent();
        axios.post("https://backendcepheus.cf/apiM2/getreg",
          {},
          {withCredentials: true})
          .then((res) => {
            console.log(res.data);
            setUserdata((userdata) => ({
              ...userdata,
              regevents: res.data.regevents
            }))
          })
          .catch((err) => {
            console.log(err);
          })
        // success();
      })
      .catch((err) => {
        console.log(err);
        error(err.response.data.message);
      });
      })
      .catch((err) => {
        console.log(err);
        error(err.response.data.message);
      });

      
  };

  const handleJoinTeamCode = (e) => {
    e.preventDefault();
    //   setconfirm(true);
    axios
      .post(
        "https://backendcepheus.cf/apiM2/regevent",
        {
          event_id: data.id,
          team_code: joinTeamCode,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        axios.post("https://backendcepheus.cf/apiM2/getreg",
          {},
          {withCredentials: true})
          .then((res) => {
            console.log(res.data);
            setUserdata((userdata) => ({
              ...userdata,
              regevents: res.data.regevents
            }))
          })
          .catch((err) => {
            console.log(err);
          })
        success_jointeam();
        // success();
      })
      .catch((err) => {
        console.log(err);
        error(err.response.data.message);
      });
  };

  const register = (e) => {
    if (teamSize > 1) {
      setclicked(true);
    } else {
      console.log("individual event");
      // setCreateTeamNameind(userdata.email);
      // console.log(userdata.email)
      handleTeamCreationind(e);
      // console.log("succes yeah!!")  
    }
  };
  // const close = () =>{

  // }
  const [clickedon, setclicked] = useState(false);

  return (
    //   <div class="contact-main-card">
    //     <img class="main-card-border" src="img/Main_card_border.png" alt="Border"></img>
    //     <div class="main-card-content">
    //       <img src="img/user_placeholder.png" alt="Avatar"></img>
    //       <div class="main-card-contact-detail">
    //           <p class="name-role">{data.role}</p>
    //           <p class="name-role">{data.name}</p>
    //           <p class="contact">{data.email}</p>
    //           <p class="contact">{data.phone}</p>
    //       </div>
    //     </div>
    //   </div>
    <div>
      <div style={clickedon ? { display: "none" } : { display: "block" }}>
        <center>
          <div id="outer">
            <div id="inner">
              <div id="inner-left">
                <div id="fake"></div>
                <img
                  draggable="false"
                  id="close2"
                  src={data.exitsrc}
                  onClick={() => {
                    exiting();
                  }}
                ></img>
                <center>
                  <img
                    draggable="false"
                    style={{ borderRadius: "15px" }}
                    id="left-post"
                    src={data.source}
                  ></img>
                  <br></br>
                  <h3
                    style={{ marginTop: "3px", color: "white" }}
                    id="sub-left-head"
                  >
                    Team Size: {data.teamsize}
                  </h3>
                  {/* <br></br> */}
                  <h3 style={{ marginTop: "7px" }} id="sub-left-head">
                    Contact:Event Coheads
                  </h3>
                  <h4 id="sub-sub-left-head">{data.left1}</h4>
                  <h4 id="sub-sub-left-head">{data.left2}</h4>
                </center>
              </div>
              <div id="inner-right">
                <img
                  draggable="false"
                  id="close1"
                  src={data.exitsrc}
                  onClick={() => {
                    exiting();
                  }}
                ></img>
                <center>
                  <h1 id="sub-head">{data.name}</h1>
                </center>
                <div id="para">
                  {data.para}
                  <center>
                    <MediaQuery maxWidth={700}>
                      <br></br>
                      <h3 style={{ marginTop: "3px", color: "white" }}>
                        Team Size: {data.teamsize}
                      </h3>
                      {/* <br></br> */}
                      <h3 style={{ color: "#FCC200" }}>
                        Contact:Event Coheads
                      </h3>
                      <h4>{data.left1}</h4>
                      <h4>{data.left2}</h4>
                    </MediaQuery>
                  </center>
                </div>
                <center>
                  <button id="button-right" onClick={(e) => register(e)}>
                    Register
                  </button>
                </center>
              </div>
            </div>
          </div>
        </center>
      </div>
      <center>
        <div className={clickedon ? "popup_active" : "popup_inactive"}>
          <img
            draggable="false"
            id="formcls"
            style={{ cursor: "pointer" }}
            src={data.exitsrc}
            onClick={() => {
              if (confirm) {
                setconfirm(false);
              } else {
                if (create == true || join == true) {
                  setcreate(false);
                  setjoin(false);
                } else {
                  setclicked(false);
                }
              }
            }}
          ></img>
          <center>
            <h1>Team Details</h1>
          </center>
          {/* <form> */}
          <div
            style={create || join ? { display: "none" } : { display: "block" }}
          >
            <button
              id="reg_team"
              onClick={() => {
                setcreate(true);
              }}
            >
              Create Team
            </button>
            <button
              id="reg_team"
              onClick={() => {
                setjoin(true);
              }}
            >
              Join Team
            </button>
          </div>

          <div className={create ? "create_active" : "create_inactive"}>
            <center>
              <label>Team Name</label>
              <br></br>
            </center>
            <input
              type="text"
              // name="teamname"
              placeholder="Team Name"
              // id="teamname"
              required
              value={createTeamName}
              onChange={(e) => setCreateTeamName(e.target.value)}
            />
            <br></br>
            <button id="reg_team1" onClick={(e) => handleTeamCreation(e)}>
              Submit
            </button>
            <br />
            <br />
            <center>
              <label className={displayteamcode ? "teamcode_active" : "teamcode_inactive"}>Team Code : {display_team_code}</label>
              <br />
              <br />
              <div className={displayteamcode ? "teamcode_active" : "teamcode_inactive"}>Please save this team code and share it with your teamaters to join the team</div>
              <br></br>
            </center>
          </div>
          <div className={join ? "create_active" : "create_inactive"}>
            <div className={confirm ? "create_inactive" : "create_active"}>
              <center>
                <label>Team Code</label>
                <br></br>
              </center>
              <input
                type="text"
                placeholder="Team Code"
                //   id="teamname"

                required
                value={joinTeamCode}
                onChange={(e) => setJoinTeamCode(e.target.value)}
              />
              <br></br>
              <button
                //   id="reg_team1"
                onClick={(e) => handleJoinTeamCode(e)}
              >
                Next
              </button>
            </div>
            <div className={confirm ? "create_active" : "create_inactive"}>
              <center>
                <label>Confirm Team Code</label>
                <br></br>
              </center>
              <input
                type="text"
                //   name="teamname"
                placeholder="Confirm Team Code"
                //   id="teamname"
                required
              />
              <br></br>
              <button id="reg_team1">Submit</button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </center>
    </div>
  );
}
