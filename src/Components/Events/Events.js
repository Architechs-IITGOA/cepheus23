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
		  if (nextCount > 3) {
			nextCount = 0;
		  }
		  return { eventcarou: nextCount};
		});
		this.setState(prevState => {
		  let nextCountone = prevState.eventcaroone + 1;
		  if (nextCountone > 4) {
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
		this.intervalId = setInterval(this.incrementCount, 4000);
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
			
			left1 : '1.Utsav Bansal (+91 62671 84086)',
			left2 : '2.Arya Gawde (+91 99695 26850)',
			name : 'Design Challenge',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290943/Cepheus/Design_Challange_omrs0o.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290943/Cepheus/Design_Challange_omrs0o.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Every great design begins with an even better story. Through this event, we hope to find bright and innovative designers across the country to face off and design the user interface for a website based on the theme “Multiverse”. The submission can be made individually or as a team of two within 24 hours from the start of the competition.',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Full Stack Hackathon',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290944/Cepheus/Full_stack_hachathon_vkcaql.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290944/Cepheus/Full_stack_hachathon_vkcaql.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'From functionality and appearance to navigation and coding integrity, a lot goes into creating an eye-catching, user-friendly website. We bring to you an amusing challenge where every participating team will have to develop a website based on the theme, “Multiverse survival”. The team will have to work on the topic and create a fully functional website. There may be a presentation round as well to track your progress.!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Circuital Dilemma',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290952/Cepheus/Circuital_Dilemma_ouhmnd.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290952/Cepheus/Circuital_Dilemma_ouhmnd.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'This event offers an opportunity to test your digital circuit problem-solving skills using logic and innovation while retaining the spirit of collective learning. The two-stage submission process involves tackling some real-life problems while being constrained to a given time. The First stage consists of short but tricky MCQs and the participants would need to solve the questions in a short timeframe. This will be an elimination round. The teams who reach the second round will have to solve some really interesting yet complex real life problems based on multiple concepts of Digital Design and Digital Circuits.',
			
			
			


		},
		{
			
			left1 : '1.Ananya Alekar (+91 84249 42069)',
			left2 : '2.Abhinav Reddy (+91 93925 34843)',
			name : 'Data Science Hackathon',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Data_Science_Hackathon_p6wklq.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Data_Science_Hackathon_p6wklq.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'We are living in a world of big data that is empowering businesses and organizations to make data-driven decisions.  Delve deep into your Data Science skills and build an ML model to help a planet that is facing an unprecedented problem. The problem statements involve tackling some real-life problems and using the insights gained to guide decision-making and strategic planning.',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'OpenCV Emotion detection',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290950/Cepheus/OpernCV_mk1vs2.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290950/Cepheus/OpernCV_mk1vs2.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Gesture recognition is an active research field in Human-Computer Interaction technology. It has many applications in virtual environment control, sign language translation, robot control, and music creation. In this workshop, you will be able to learn and understand how gesture recognition is implemented using OpenCV, following which there will be a hackathon. Participants will have to automate any game of their choice with the use of hand gestures, thereby creating a virtual mouse.',
			
			
			


		},
		{
			
			left1 : '1.Khushi Chaudhary (+91 83189 21233)',
			left2 : '2.Harshvardhan Gupta (+91 99935 57806)',
			name : 'CTF',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290942/Cepheus/Capture_the_flag_i2qdlx.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290942/Cepheus/Capture_the_flag_i2qdlx.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Capture The Flag is a 3-day event in which teams will be given challenges involving cybersecurity. The essence of a CTF is puzzle-solving. The challenges are created by and for people who like solving puzzles. The goal of each challenge will be to find the hidden flag. The difficulty of the challenge determines the points awarded to the team. The team that gets the most points in the shortest amount of time wins.',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'FizzBuzz',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290943/Cepheus/FizzBuzz_gnl65x.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290943/Cepheus/FizzBuzz_gnl65x.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'FizzBuzz is a competitive coding contest. In this event, participants will be given algorithm-based problems to solve within a 2-hour time limit. This is an individual event. Don\'t fret, even if you\'re a beginner, the event ensures that everybody regardless of what their level is, will receive an opportunity to solve a problem. Do you have what it takes to survive Fizzbuzz and come out on top?',
			
			
			


		},
		{
			
			left1 : '1.Nidamanuri Sai Adarsh (+91 93925 34843)',
			left2 : '2.Abhinav Reddy (+91 93925 34843)',
			name : 'Online Treasure Hunt',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290948/Cepheus/Online_Treasure_hunt_slarbk.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290948/Cepheus/Online_Treasure_hunt_slarbk.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'This will be a 12-hour Treasure Hunt-style event with five rounds of various tasks depending on the participants\' coding and analytical skills. The contestants will receive points for their progress on problem statements in each round, and the competition will be held on a single platform. After 3-4 events, there will be some elimination based on the points earned, and the winner of the competition will be decided based on the highest number of points earned.',
			
			
			


		},
		{
			
			left1 : '1.Vaidehi Chougule (+91 80805 86791)',
			left2 : '2.Aditya Muppavarapu (+91 95848 48383)',
			name : 'Bridge Building Competition',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290943/Cepheus/Bridge_Building_gqvsiy.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290943/Cepheus/Bridge_Building_gqvsiy.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'We\'ve all heard the poem \"London Bridge is falling down, falling down, falling down,\" but have you ever wondered why the bridge is going down? Of course, as a result of poor design! To ensure nothing like that happens again, in this challenge, it is up to you to design an extraordinarily well-planned bridge provided that all the given constraints are fulfilled.',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Front End Challenge',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Front_End_Challange_yg62nj.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Front_End_Challange_yg62nj.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'We’re sure everyone has experienced how frustrating it gets while browsing a government website, at least once in their life. The reason? Simple! Poor functionality and counter-intuitive UI design. After all, websites are the first impressions that we have on our clients. Step up for this challenge that we present to you. Use your CSS and JS skills and explore your creativity to style a webpage and make it functional. Keep an eye out for the constraints - you can’t modify the HTML file that will be provided. ',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Pitching event',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290949/Cepheus/Pitching_eveent_bpoypi.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290949/Cepheus/Pitching_eveent_bpoypi.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'The hype that Shark Tank India created, a few months back, was real! It had all of us glued to our seats, and sparked our minds with curiosity and awe. We’re planning to give you a similar experience this year. Except, that you’ll not be watching this time. You’ll be the one pitching your ideas to the panel of investors in front of you. Pitch your startup ideas, specifically in the domain of FinTech in under 7 minutes. Stand a chance to be noticed by the investors and get their help in financing your ideas.',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'KBC Quiz Competition',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/KBC_lvatlo.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/KBC_lvatlo.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Watching KBC on TV is by far one of our favorite memories. Our excitement is at its peak when a question is presented to the participant, and the stakes are high. Join us for a fun KBC quiz event this year. In teams of 3, you will have 30 seconds to answer the question given to you. But, here’s the catch. A wrong answer will fetch you negative marks, so be confident about your answers. Put your speed and knowledge to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Line Follower Bot competition',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Line_follower_bot_y1pjyu.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Line_follower_bot_y1pjyu.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Ever been fascinated by remote-controlled cars or F1 racing events? Then this event is perfect for you. Dive right into this race, where we present to you an obstacle-ridden track. Bring in your line follower bots, and start racing them across the line tracks. Needless to say, the fastest bot wins the race!',
			
			
			


		},
		{
			
			left1 : '1.Hetarth Bhatt ( +91 87806 32021)',
			left2 : '',
			name : 'Line Maze Fun game',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290952/Cepheus/Line_Maze_msgsxv.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290952/Cepheus/Line_Maze_msgsxv.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Ever solved those fun mazes at the back of your notebooks? This event is all about maze solving but the catch is that you will have to solve it using a ROBOT!! All participants will be given an RC car which they have to maneuver through the maze.  The car will be equipped with IR sensors in every direction. If the car touches the line, the sensors will pick up the signal, a buzzer will go off and the player will fall out of the game. This is a fun event so be ready to put your RC driving skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Swasti Jain (+91 94254 07984)',
			left2 : '',
			name : 'Scratch for school students',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'A fun event for school students to introduce them to the world of programming using scratch. Scratch is a tool that allows people to explore the world of coding and logic flow without having any prior knowledge. This would be a workshop cum hackathon in which we would be demonstrating how to build a game using scratch followed by a problem statement. The participants have to create a game based on the problem statement implementing what has been demonstrated in the workshop. We aim to teach the importance of coding to students and introduce them to the basic logic flow and structure behind programming.',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Treasure hunt',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'The event is somewhat similar to Treasure Hunt but in a computer sciency way! Participants would have to solve tricky questions of competitive programming to find clues for the next waypoint. The event will be conducted in two phases - Snail trail and Escape room. In snail trail, the participants would have to collect multiple clues, each clue leading to another. All the clues collected in the first round will be useful in the second round in which the teams will be separated in different rooms and will be given a task to solve in which the previous clues will be useful. So get ready to solve these brain racking problem statements and awaken the Sherlock Holmes within you!',
			
			
			


		},
		{
			
			left1 : '1.Arnav Kamat (+91 82370 63638)',
			left2 : '2.Aniket Chaudhary (+91 70873 63393)',
			name : 'Trading',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'You have heard about trading in stocks and trading in cryptocurrency, but have you ever heard about trading in programming? We are hosting a fascinating event that will test both your trading and coding skills. Problem statements will be released and the participants will have to create functions that might be helpful to complete the challenge. The name and description of all functions will be open to all the participants. If participants are convinced by the price and description then they can trade. ',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Toil and Trouble',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Curious about competitive programming but don’t know where to start? We bring to you a fun coding event to help you hone your programming skills even without any prior experience. There will be five coding rounds which will  progress from easy to medium difficulty levels namely,  Introduction to a new language, Debugging Round, Brain Racking, Blind Code, and CP with risk and reward. ',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event1',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event2',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event3',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event4',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event5',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event6',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event7',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event8',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Event9',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		},
		{
			
			left1 : '1.Nikhil Kumar (+91 77396 25907)',
			left2 : '2.Tarun Vasupally (+91 63046 14040)',
			name : 'Copy the nature',
			source: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Copy_the_nature_dir8d1.webp',
			source1: 'https://res.cloudinary.com/dz7pcvoef/image/upload/c_scale,q_auto:eco,w_240/v1673290947/Cepheus/Copy_the_nature_dir8d1.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Showcase your passion for 3D modeling with this competition. Participants in this challenge must create a 3D model of a living creature with no restrictions on creativity. The species can be extinct or even fictitious, so let your imagination take the wheel and start designing!',
			
			
			


		},
		{
			
			left1 : '1.Tarun Vasupally (+91 63046 14040)',
			left2 : '',
			name : 'Drive the boat (Fun Event)',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Have you ever played with Legos? If yes: you have an edge! If not: your time has arrived! Get ready to build a boat and wade through uncertain waters without losing your hold You will be given lego building bars, a motor, and a battery to create your own boat. You must configure the boat in such a way that it reaches a certain distance or person within the stipulated time.',
			
			
			
			


		},
		{
			
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			name : 'Climbing Up the challenge',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Put your problem-solving skills to the test in this event that will test your knowledge in the mechanical domain through our curated set of puzzles and trivia. We will present you with four checkpoints and the first team to successfully complete all four will be declared the winner. We hope to see interesting and intuitive approaches from the participants.',
			
			
			


		},
		{
			
			left1 : '1.B. Nandini (+91 90943 57472)',
			left2 : '2.Vaidehi Chougule (+91 80805 86791))',
			name : 'Game Theory event',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'It\'s riveting to see how games and human nature can get complicated and interesting at the same time. Game Theory is the tool in use to comprehend the subtle relation between the two. It also lays the foundation for some profound algorithms used in AI today. If Game Theory is back on the grid, so are we. There would be a faceoff between participants in each round, which will consist of multiple games. The selected players would proceed to the next round and climb up the Leaderboard. So keep an eye out for everyone\'s strengths and weaknesses, and get ready to play on both fronts.',
			
			
			


		},
		{
			
			left1 : '1.Varun Singh (+91 99583 57706)',
			left2 : '2.Yash Bhansali (+91 73048 93913)',
			name : 'Arduino Workshop',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'In order to expand the knowledge of participants we will be hosting a workshop followed by a competition on Arduino The entire workshop is split into 3 sessions, during which the facilitators will explain the fundamentals of Arduino and other basic sensors and motors while also demonstrating some live projects using both hardware and software. Whatever your skill level is, you’re sure to have fun as you will learn to harness the power of Arduino in your own DIY projects.'
			
			
			
			


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
								<center><h1  id="text" style={{paddingTop:'5px'}}>ONLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'offline' onClick={()=> {this.setState({clicked2:true,eventcaroone:0})}}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text" style={{paddingTop:'5px'}}>OFFLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'talks' onClick={()=> {this.setState({clicked3:true,eventcartwo:0})}}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text" style={{paddingTop:'5px'}}>TALKS</h1></center>
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
									
								<ul className="nav-dots1aft" id="js-dots" style={{marginTop:'0.8%'}}>
								<li className={eventcarou==0?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcarou:0,reset:true})} }></li>
								<li className={eventcarou==1?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcarou:1,reset:true})} ></li>
								<li className={eventcarou==2?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcarou:2,reset:true})} ></li>
								<li className={eventcarou==3?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcarou:3,reset:true})} ></li>
								
								</ul>
	
								<main className="main" id = 'js-section'>
								<section className={eventcarou==0?"section is-active transition":"section transition"}   id="section1">
								
									<ul id="list" >
									<li ><div className='event'   onClick={()=>{ this.setState({clickedtwo:true});this.setState({eveno:0})}}  >
									<img draggable='false'  src={listData[0].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventtwo:true});this.setState({eveno:1})}} >
									<img draggable='false'  src={listData[1].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventthree:true});this.setState({eveno:2})}} >
									<img draggable='false'  src={listData[2].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'   onClick={()=> {this.setState({eventfour:true});this.setState({eveno:3})}} >
									<img draggable='false'  src={listData[3].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventfive:true});this.setState({eveno:4})}} >
									<img draggable='false'  src={listData[4].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventsix:true});this.setState({eveno:5})}} >
									<img draggable='false'  src={listData[5].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventseven:true});this.setState({eveno:6})}}  >
									<img draggable='false'  src={listData[6].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventeight:true});this.setState({eveno:7})}} >
									<img draggable='false'  src={listData[7].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventnine:true});this.setState({eveno:8})}} >
									<img draggable='false'  src={listData[8].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==3?"section is-active3 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventseven:true});this.setState({eveno:27})}}  >
									<img draggable='false'  src={listData[27].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
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
									
								<ul className="nav-dots2aft" id="js-dots2" style={{marginTop:'0.8%'}}>
								<li className={eventcaroone==0?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcaroone:0,reset:true})}} ></li>
								<li className={eventcaroone==1?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcaroone:1,reset:true})} ></li>
								<li className={eventcaroone==2?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcaroone:2,reset:true})} ></li>
								<li className={eventcaroone==3?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcaroone:3,reset:true})} ></li>
								<li className={eventcaroone==4?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcaroone:4,reset:true})} ></li>
								
								</ul>
	
								<main className="main" id = 'js-section2'>
								<section className={eventcaroone==0?"section is-active transition":"section transition"} id="section1">
								
									<ul id="list" >
									<li ><div className='event'   onClick={()=> {this.setState({clickedtwooff:true});this.setState({eveno:9})}}  >
									<img draggable='false'  src={listData[9].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventtwooff:true});this.setState({eveno:10})}} >
									<img draggable='false'  src={listData[10].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventthreeoff:true});this.setState({eveno:11})}} >
									<img draggable='false'  src={listData[11].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'   onClick={()=> {this.setState({eventfouroff:true});this.setState({eveno:12})}} >
									<img draggable='false'  src={listData[12].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventfiveoff:true});this.setState({eveno:13})}} >
									<img draggable='false'  src={listData[13].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventsixoff:true});this.setState({eveno:14})}} >
									<img draggable='false'  src={listData[14].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:15})}}  >
									<img draggable='false'  src={listData[15].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventeightoff:true});this.setState({eveno:16})}} >
									<img draggable='false'  src={listData[16].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventnineoff:true});this.setState({eveno:17})}} >
									<img draggable='false'  src={listData[17].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==3?"section is-active3 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:28})}}  >
									<img draggable='false'  src={listData[28].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventeightoff:true});this.setState({eveno:29})}} >
									<img draggable='false'  src={listData[29].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventnineoff:true});this.setState({eveno:30})}} >
									<img draggable='false'  src={listData[30].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==4?"section is-active4 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:31})}}  >
									<img draggable='false'  src={listData[31].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
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
									<li ><div className='event'   onClick={()=> {this.setState({clickedtwotal:true});this.setState({eveno:18})}} >
									<img draggable='false'  src={listData[18].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventtwotal:true});this.setState({eveno:19})}} >
									<img draggable='false'  src={listData[19].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'  onClick={()=> {this.setState({eventthreetal:true});this.setState({eveno:20})}} >
									<img draggable='false'  src={listData[20].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcartwo==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'   onClick={()=> {this.setState({eventfourtal:true});this.setState({eveno:21})}} >
									<img draggable='false'  src={listData[21].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventfivetal:true});this.setState({eveno:22})}} >
									<img draggable='false'  src={listData[22].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventsixtal:true});this.setState({eveno:23})}} >
									<img draggable='false'  src={listData[23].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcartwo==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventsevental:true});this.setState({eveno:24})}}  >
									<img draggable='false'  src={listData[24].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventeighttal:true});this.setState({eveno:25})}} >
									<img draggable='false'  src={listData[25].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventninetal:true});this.setState({eveno:26})}} >
									<img draggable='false'  src={listData[26].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-126%'}}></img>
									
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

					<div style={{marginTop:'-8vh'}} >
					
					
						<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine||clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff||clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'eventzon':'eventzoff'}>
						
						<Eventcard  data={listData[eveno]} exiting={()=>{

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
