// import logo from './logo.svg';
import Eventcard from './eventpage'
import './Events.css';
import im1 from './Events-Images/online.png'
import im2 from './Events-Images/offline.png'
import im3 from './Events-Images/talks.png'
import im4 from './Events-Images/rulebook.png'
import background from "./events_page.png"
import MediaQuery from 'react-responsive';
import { useState, useEffect, useRef } from 'react';
// import './style.css';
import React from "react";
// import { render } from '@testing-library/react';




const myStyle = {
    height:"100vh",
    // width:"100%",
    backgroundImage:'url(./background.png)',
    
    backgroundAttachment:"fixed",
    backgroundPosition:"center",
    backgroundRepeat:'no-repeat',
  
    backgroundSize:'cover',
  }
  const listStyle = {
    listStyle:'none',
    display:'flex',
    // alignItems:'center',
    marginTop:'6%',
    flexDirection:'row',
    justifyContent:'space-around',
	width:'80vw',
    marginLeft:'8.6%'
  }
  const listStyle1 = {
    listStyle:'none',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    marginLeft:'-2.2vw'
  }
  const listStyle2 = {
    listStyle:'none',
    display:'flex',
    width:'80%',
    justifyContent:'space-around',
    marginLeft:'-3.5vw',
    marginTop:'6%',
  }
  const elemStyle = {
    // hover:"scale(1.2)",
    backgroundImage:'url(./elem.png)',
  }
  const elemStyle1 = {
    backgroundImage:'url(./postcar.png)',
  }
  const buttonStyle = {
    marginTop:"5.5%",
    width:'250px',
    height:'50px',
    cursor:"pointer",
  }
  const elemstyle700 = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./elem.png)',
    backgroundSize:'cover',
    width:"165px",
    height:"165px",
    cursor:"pointer",
  }
  const elemstyle1700 = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    backgroundSize:'cover',
    width:"16vw",
    height:"16vw",
    cursor:"pointer",
  }
  const elemmobst = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    backgroundSize:'cover',
    width:"15vh",
    height:"15vh",
	marginTop:'20px',
    cursor:"pointer",
	marginLeft:'-20px'
  }
  const listStylemob = {
    listStyle:'none',
    display:'block',
    marginTop:'-2%',
	width:'200px',
  }
  const elemstyle700mob = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./elem.png)',
    backgroundSize:'cover',
    width:"18vh",
    height:"18vh",
	marginTop:'23px',
    cursor:"pointer",
  }
  const listStyle2mob = {
    listStyle:'none',
    display:'block',
    width:'90%',
    justifyContent:'space-around',
    marginLeft:'-4%',
    marginTop:'6%',
  }

  



  


class Events extends React.Component {
	constructor(props){
		super(props);
		this.state = {clicked:false};
		this.state = {clicked2:false};
		this.state = {clicked3:false};
		this.state = {clickedtwo:false};
		this.state = {eventtwo:false};
		this.state = {eventthree:false};
		this.state = {eventfour:false};
		this.state = {eventfive:false};
		this.state = {eventsix:false};
		this.state = {eventseven:false};
		this.state = {eventeight:false};
		this.state = {eventnine:false};

		this.state = {clickedtwooff:false};
		this.state = {eventtwooff:false};
		this.state = {eventthreeoff:false};
		this.state = {eventfouroff:false};
		this.state = {eventfiveoff:false};
		this.state = {eventsixoff:false};
		this.state = {eventsevenoff:false};
		this.state = {eventeightoff:false};
		this.state = {eventnineoff:false};

		this.state = {clickedtwotal:false};
		this.state = {eventtwotal:false};
		this.state = {eventthreetal:false};
		this.state = {eventfourtal:false};
		this.state = {eventfivetal:false};
		this.state = {eventsixtal:false};
		this.state = {eventsevental:false};
		this.state = {eventeighttal:false};
		this.state = {eventninetal:false};
		this.state = {reset:false};
		this.state = {eventcarou:0};
		this.state = {eventcaroone:0};
		this.state = {eventcartwo:0};
		this.state = {
			left1 : 'ABX2',
			left2 : 'ABX',
			name : 'Event1',
			border: './border1.png',
			source: './poster.png',
			exitsrc: './exit.png',
			para: 'hello world',
		}
		this.state = {eveno:0};

		
			function useInterval(callback, delay) {
				const savedCallback = useRef();
			  
				// Remember the latest callback.
				useEffect(() => {
				  savedCallback.current = callback;
				}, [callback]);
			  
				// Set up the interval.
				useEffect(() => {
				  function tick() {
					savedCallback.current();
				  }
				  if (delay !== null) {
					let id = setInterval(tick, delay);
					return () => clearInterval(id);
				  }
				}, [delay]);
			  }
		
		
		
	}
	state = {
		eventcarou: 0,
		eventcaroone: 0,
		eventcartwo: 0,
	  }
	
	  intervalId = 0;
	
	  incrementCount = () => {
		this.setState(prevState => {
		  let nextCount = prevState.eventcarou + 1;
		  if (nextCount > 2) {
			nextCount = 0;
		  }
		  return { eventcarou: nextCount};
		});
		this.setState(prevState => {
		  let nextCountone = prevState.eventcaroone + 1;
		  if (nextCountone > 2) {
			nextCountone = 0;
		  }
		  return { eventcaroone: nextCountone };
		});
		this.setState(prevState => {
		  let nextCounttwo = prevState.eventcartwo + 1;
		  if (nextCounttwo > 2) {
			nextCounttwo = 0;
		  }
		  return { eventcartwo: nextCounttwo };
		});
	  }
	
	  componentDidMount() {
		this.intervalId = setInterval(this.incrementCount, 6000);
	  }
	
	  componentWillUnmount() {
		clearInterval(this.intervalId);
	  }
	
	
	render(){
		const eveno = this.state.eveno;
		const clicked = this.state.clicked;
		const clicked2 = this.state.clicked2;
		const clicked3 = this.state.clicked3;
		const clickedtwo = this.state.clickedtwo;
		const eventtwo = this.state.eventtwo;
		const eventthree = this.state.eventthree;
		const eventfour = this.state.eventfour;
		const eventfive = this.state.eventfive;
		const eventsix = this.state.eventsix;
		const eventseven = this.state.eventseven;
		const eventeight = this.state.eventeight;
		const eventnine = this.state.eventnine;

		const clickedtwooff = this.state.clickedtwooff;
		const eventtwooff = this.state.eventtwooff;
		const eventthreeoff = this.state.eventthreeoff;
		const eventfouroff = this.state.eventfouroff;
		const eventfiveoff = this.state.eventfiveoff;
		const eventsixoff = this.state.eventsixoff;
		const eventsevenoff = this.state.eventsevenoff;
		const eventeightoff = this.state.eventeightoff;
		const eventnineoff = this.state.eventnineoff;

		const clickedtwotal = this.state.clickedtwotal;
		const eventtwotal = this.state.eventtwotal;
		const eventthreetal = this.state.eventthreetal;
		const eventfourtal = this.state.eventfourtal;
		const eventfivetal = this.state.eventfivetal;
		const eventsixtal = this.state.eventsixtal;
		const eventsevental = this.state.eventsevental;
		const eventeighttal = this.state.eventeighttal;
		const eventninetal = this.state.eventninetal;
		const eventcarou = this.state.eventcarou;
		const eventcaroone = this.state.eventcaroone;
		const eventcartwo = this.state.eventcartwo;
		const reset = this.state.reset;
		
		


		const listData =[ {
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event1',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event2',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event3',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event4',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event5',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event6',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event7',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event8',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event9',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event1',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event2',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event3',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event4',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event5',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event6',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event7',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event8',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event9',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event1',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event2',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event3',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event4',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event5',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event6',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event7',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event8',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event9',
			source: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		];
		
		
		
		

		  
		  
	
		
		   
		
		return (
			<div className="events" id="Events">
				
				<div className="events-bg">
					<br></br>
					<br></br>
					<br></br>
					{/* <br></br> */}
					<h1  id="main-heading">EVENTS</h1>
	
					{/* <div className={clicked||clicked2||clicked3?'secondoff1':'firston1'}> */}
					<div  className={clicked||clicked2||clicked3?'eventzoff100':'eventzon100'}>
					<div className={clicked||clicked2||clicked3?'secondofffirst':'secondon'}>
					<div className='setting' >
						
						<center>
						<ul  className="firstpagelist">
							<li ><div style={elemStyle} id = "online" onClick={()=> {this.setState({clicked:true,eventcarou:0})}} >
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text">ONLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'offline' onClick={()=> {this.setState({clicked2:true,eventcaroone:0})}}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text">OFFLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'talks' onClick={()=> {this.setState({clicked3:true,eventcartwo:0})}}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text">TALKS</h1></center>
							</div>
							</div></li>
						</ul>
						</center>
						<br></br>
						<br></br>
						<center>
						{/* <img src={im4}  className="events-rb first"></img>  */}
						<div className='buttondiv' >
							<img src={im4}  className="buttonimg"></img> 
						</div>
						</center>
					</div>
					</div>
					</div>
					<div   className={clicked?'eventzon10':'eventzoff10'}>
					{/* <div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine?'secondoff1':'secondon'}> */}
					
					<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine?'eventzoff1':'eventzon1'}>
					<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine?'secondoff':'secondon'}>
					<div className={clicked2||clicked3||clicked?'secondon':'secondoff'}>
					<div className={clicked2||clicked3?'secondoff':'secondon'}>
					
					<center>
							<div id='blur'>
								<br></br>
								<img draggable='false'  id='close' src='./exit.png'   onClick={()=> this.setState({clicked:false})}></img>
									<h1 id='online-heading'>ONLINE EVENTS</h1>
									
								<ul className="nav-dots" id="js-dots" style={{marginTop:'0.8%'}}>
								<li className={eventcarou==0?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcarou:0,reset:true})} }></li>
								<li className={eventcarou==1?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcarou:1,reset:true})} ></li>
								<li className={eventcarou==2?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcarou:2,reset:true})} ></li>
								
								</ul>
	
								<main className="main" id = 'js-section'>
								<section className={eventcarou==0?"section is-active transition":"section transition"}   id="section1">
								
									<ul id="list" >
									<li ><div className='event'  style={elemStyle1} onClick={()=>{ this.setState({clickedtwo:true});this.setState({eveno:0})}}  >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[0].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventtwo:true});this.setState({eveno:1})}} >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[1].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventthree:true});this.setState({eveno:2})}} >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[2].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventfour:true});this.setState({eveno:3})}} >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[3].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventfive:true});this.setState({eveno:4})}} >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[4].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventsix:true});this.setState({eveno:5})}} >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[5].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventseven:true});this.setState({eveno:6})}}  >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[6].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventeight:true});this.setState({eveno:7})}} >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[7].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventnine:true});this.setState({eveno:8})}} >
									<img draggable='false'  src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>{listData[8].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
					</div>
					</div>
					{/* </div> */}
	
	
					
					</div>
					<div   className={clicked2?'eventzon10':'eventzoff10'}>
					{/* <div className={clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff?'secondoff1':'secondon'}> */}
					
					<div className={clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff?'eventzoff1':'eventzon1'}>
					<div className={clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff?'secondoff':'secondon'}>
					<div className={clicked||clicked3||clicked2?'secondon':'secondoff'}>
					<div className={clicked||clicked3?'secondoff':'secondon'}>
					
					<center>
							<div id='blur' >
								<br></br>
								<img draggable='false' id='close' src='./exit.png'   onClick={()=> this.setState({clicked2:false})}></img>
									<h1 id='online-heading'>OFFLINE EVENTS</h1>
									
								<ul className="nav-dots" id="js-dots2" style={{marginTop:'0.8%'}}>
								<li className={eventcaroone==0?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcaroone:0,reset:true})}} ></li>
								<li className={eventcaroone==1?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcaroone:1,reset:true})} ></li>
								<li className={eventcaroone==2?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcaroone:2,reset:true})} ></li>
								
								</ul>
	
								<main className="main" id = 'js-section2'>
								<section className={eventcaroone==0?"section is-active transition":"section transition"} id="section1">
								
									<ul id="list" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({clickedtwooff:true});this.setState({eveno:9})}}  >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[9].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventtwooff:true});this.setState({eveno:10})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[10].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventthreeoff:true});this.setState({eveno:11})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[11].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventfouroff:true});this.setState({eveno:12})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[12].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventfiveoff:true});this.setState({eveno:13})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[13].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventsixoff:true});this.setState({eveno:14})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[14].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:15})}}  >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[15].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventeightoff:true});this.setState({eveno:16})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[16].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventnineoff:true});this.setState({eveno:17})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[17].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
					</div>
					</div>
					{/* </div> */}
	
	
					<div >
					
					</div>
					</div>
					<div  className={clicked3?'eventzon10':'eventzoff10'}>
					{/* <div className={clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'secondoff1':'secondon'}> */}
					<div className={clicked||clicked2||clicked3?'secondon':'secondoff'}>
					<div className={clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'eventzoff1':'eventzon1'}>
					<div className={'eventzon1'}>
					<div className={clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'secondoff':'secondon'}>
					
					<div className={clicked||clicked2?'secondoff':'secondon'}>
					
					<center>
							<div id='blur' >
								<br></br>
								<img draggable='false' id='close' src='./exit.png'   onClick={()=> this.setState({clicked3:false})}></img>
									<h1 id='online-heading'>TALKS</h1>
									
								<ul className="nav-dots" id="js-dots3" style={{marginTop:'0.8%'}}>
								<li className={eventcartwo==0?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcartwo:0,reset:true})} ></li>
								<li className={eventcartwo==1?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcartwo:1,reset:true})} ></li>
								<li className={eventcartwo==2?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcartwo:2,reset:true})} ></li>
								
								</ul>
	
								<main className="main" id = 'js-section3'>
								<section className={eventcartwo==0?"section is-active transition":"section transition"} id="section1">
								
									<ul id="list" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({clickedtwotal:true});this.setState({eveno:18})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[18].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventtwotal:true});this.setState({eveno:19})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[19].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventthreetal:true});this.setState({eveno:20})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[20].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className={eventcartwo==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventfourtal:true});this.setState({eveno:21})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[21].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventfivetal:true});this.setState({eveno:22})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[22].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventsixtal:true});this.setState({eveno:23})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[23].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className={eventcartwo==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventsevental:true});this.setState({eveno:24})}}  >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[24].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventeighttal:true});this.setState({eveno:25})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[25].name}</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> {this.setState({eventninetal:true});this.setState({eveno:26})}} >
									<img draggable='false' src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">{listData[26].name}</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
					</div>
					</div>
					</div>
					{/* </div> */}
	
	
					<div >
					
					</div>
					</div>

					<div >
					
					
						<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine||clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff||clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'eventzon':'eventzoff'}>
						{/* <div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine||clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff||clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'secondon':setTimeout('secondofflast',500)}> */}
						{/* <img draggable='false' src='./exit.png' style={{marginLeft:'70%',marginTop:'-5%'}}   ></img> */}
						{/* <img draggable='false' src='./exit.png'    ></img> */}
						<Eventcard data={listData[eveno]} exiting={()=>{

								this.setState({clickedtwo :false});
								this.setState({eventtwo :false});
								this.setState({eventthree :false});
								this.setState({eventfour: false});
								this.setState({eventfive :false});
								this.setState({eventsix :false});
								this.setState({eventseven :false});
								this.setState({eventeight :false});
								this.setState({eventnine :false});
								this.setState({clickedtwooff :false});
								this.setState({eventtwooff :false});
								this.setState({eventthreeoff :false});
								this.setState({eventfouroff: false});
								this.setState({eventfiveoff :false});
								this.setState({eventsixoff :false});
								this.setState({eventsevenoff :false});
								this.setState({eventeightoff :false});
								this.setState({eventnineoff :false});
								this.setState({clickedtwotal :false});
								this.setState({eventtwotal :false});
								this.setState({eventthreetal :false});
								this.setState({eventfourtal: false});
								this.setState({eventfivetal :false});
								this.setState({eventsixtal :false});
								this.setState({eventsevental :false});
								this.setState({eventeighttal :false});
								this.setState({eventninetal :false});
								
						}}/>
						</div>
					</div>
					
					</div>
				</div>
				

				


				
			 
				
				
			// </div>
	
			
		);
	}
	
}	



export default Events;
