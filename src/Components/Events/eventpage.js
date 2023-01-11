import './Events.css';
import React, {useState} from "react";
import MediaQuery from 'react-responsive';


export default function Eventcard({data,exiting}) {
	const teamSize = data.teamsize;
	const [create,setcreate] = useState(false);
	const [join,setjoin] = useState(false);
	const [confirm,setconfirm] = useState(false);
	const register = () =>{
		if (teamSize>1){
			setclicked(true);
		}else{
			console.log('individual event');
		}
	}
	// const close = () =>{

	// }
	const [clickedon,setclicked] = useState(false);
	

    return(
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
		<div >
        <div style={clickedon?{display:'none'}:{display:'block'}}>
							<center>
							<div id='outer' >
								<div id='inner' >
								<div id='inner-left'>
									<div id='fake'></div>
								<img draggable='false' id='close2' src={data.exitsrc} onClick={()=>{exiting()}}   ></img>
									<center><img draggable='false' style={{borderRadius:'15px'}} id='left-post' src={data.source}></img>
									<br></br>
									<h3  style={{marginTop:'3px',color:'white'}} id='sub-left-head'>Team Size: {data.teamsize}</h3>
									{/* <br></br> */}
									<h3 style={{marginTop:'7px'}} id='sub-left-head'>Contact:Event Coheads</h3>
									<h4 id='sub-sub-left-head' >{data.left1}</h4>
									<h4 id='sub-sub-left-head'>{data.left2}</h4>
									</center>
								</div>
								<div id='inner-right'>
									<img draggable='false' id='close1' src={data.exitsrc}   onClick={()=>{exiting()}}    ></img>
									<center><h1 id='sub-head'>{data.name}</h1>
									
									</center>
									<div id='para'>{data.para}<center><MediaQuery maxWidth={700}>
									<br></br>
									<h3  style={{marginTop:'3px',color:'white'}} >Team Size: {data.teamsize}</h3>
									{/* <br></br> */}
									<h3 style={{color:'#FCC200'}}>Contact:Event Coheads</h3>
									<h4  >{data.left1}</h4>
									<h4 >{data.left2}</h4></MediaQuery></center></div>
									<center><button id='button-right' onClick={register} >Register</button></center>
								</div>
								</div>
							</div>
							</center>
		</div>
		<center>
		<div className={clickedon?'popup_active':'popup_inactive'}>
		<img draggable='false' id='formcls' style={{cursor:'pointer'}}  src={data.exitsrc} onClick={()=>{
			if (confirm){
				setconfirm(false);
			}else{
			if (create==true||join==true){
				setcreate(false);
				setjoin(false);
			}else{
				setclicked(false);
			}
		}
			
			}}     ></img>
			<center><h1>Team Details</h1></center>
			<form >
                
                <div style={create||join?{display:'none'}:{display:'block'}}>
                <button  id='reg_team' onClick={()=>{setcreate(true)}}>Create Team</button>
                <button  id='reg_team' onClick={()=>{setjoin(true)}}>Join Team</button>
				</div>

				<div className={create?'create_active':'create_inactive'}>
					<center><label>Team Name</label><br></br></center>
					<input type="text" name="teamname" placeholder='Team Name' id="teamname" required/><br></br>
					<button id='reg_team1'>Submit</button>

				</div>
				<div className={join?'create_active':'create_inactive'}>
					<div className={confirm?'create_inactive':'create_active'}>
					<center><label>Team Code</label><br></br></center>
					<input type="text" name="teamname" placeholder='Team Code' id="teamname" required/><br></br>
					<button id='reg_team1' onClick={()=>{setconfirm(true)}}>Next</button>
					</div>
					<div className={confirm?'create_active':'create_inactive'}>
					<center><label>Confirm Team Code</label><br></br></center>
					<input type="text" name="teamname" placeholder='Confirm Team Code' id="teamname" required/><br></br>
					<button id='reg_team1' >Submit</button>

					</div>
				</div>
            </form>	
		</div>
		</center>	
		</div>	
    )
  }
