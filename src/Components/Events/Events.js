// import logo from './logo.svg';
import './Events.css';
import im1 from './Events-Images/online.png'
import im2 from './Events-Images/offline.png'
import im3 from './Events-Images/talks.png'
import im4 from './Events-Images/rulebook.png'
import background from "./events_page.png"
import MediaQuery from 'react-responsive';
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
    // backgroundImage:'url(./border.png)',
    
    // backgroundColor:'black',
    // backgroundImage'url(./border.png)',
    // backgroundSize:'cover',
    // width:"230px",
    // height:"230px",
    // cursor:"pointer",
  }
  const elemStyle1 = {
    // hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    // backgroundImage:'url(./border.png)',
    
    // backgroundColor:'black',
    // backgroundImage'url(./border.png)',
    // backgroundSize:'cover',
    // width:"14vw",
    // height:"14vw",
    // cursor:"pointer",
  }
  const buttonStyle = {
    // backgroundColor:'black',
    // backgroundImage:"url(./buttonborder.png)",
    marginTop:"5.5%",
    width:'250px',
    height:'50px',
    cursor:"pointer",
  }
  const elemstyle700 = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./elem.png)',
    // backgroundImage:'url(./border.png)',
    
    // backgroundColor:'black',
    // backgroundImage'url(./border.png)',
    backgroundSize:'cover',
    width:"165px",
    height:"165px",
    cursor:"pointer",
  }
  const elemstyle1700 = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    // backgroundImage:'url(./border.png)',
    
    // backgroundColor:'black',
    // backgroundImage'url(./border.png)',
    backgroundSize:'cover',
    width:"16vw",
    height:"16vw",
    cursor:"pointer",
  }
  const elemmobst = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    // backgroundImage:'url(./border.png)',
    
    // backgroundColor:'black',
    // backgroundImage'url(./border.png)',
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
    // alignItems:'center',
    marginTop:'-2%',
    // flexDirection:'row',
    // justifyContent:'space-around',
	width:'200px',
    // marginLeft:'8.6%'
	// marginLeft:'30%'
	// marginLeft:'20%',
	// marginRight:'50px'
	// paddingRight:'50px',
  }
  const elemstyle700mob = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./elem.png)',
    // backgroundImage:'url(./border.png)',
    
    // backgroundColor:'black',
    // backgroundImage'url(./border.png)',
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
  

  class Slider {
    constructor(options) {
      this.sections = document.querySelector(options.section);
      this.navigation = document.querySelector(options.dots);
	  if (this.navigation==null){
		setTimeout(() => {
			{
				new Slider({
					section: '#js-section',
					dots: '#js-dots',
				  });
			}
		  }, 3000);
		
	  }else{
		this.navigation.addEventListener('click', this.scrollToSection.bind(this));
	  }
	  
      
      
      
    }
    scrollToSection(e) {
       
       const dotsone = this.navigation;
             const sects = this.sections;
            const is_active = dotsone.querySelector('.is-active');
            if (is_active != null) {
              is_active.classList.remove('is-active');
               
            }
      const dots = Array.from(this.navigation.children);
      dots.forEach((dot, index) => {
        if (dot == e.target) {
           
           dots[index].classList.add('is-active');
           
        }
      });

      const is_active_sects = sects.querySelector('.is-active');
      if (is_active_sects !=null){
        is_active_sects.classList.remove('is-active');
      }
      const sectsarr = Array.from(sects.children);
      dots.forEach((dot, index) => {
        if (dot == e.target) {
           
           dots[index].classList.add('is-active');
           sectsarr[index].classList.add('is-active');
           
        }
      });
      
    //   console.log(sectsarr);

    }
	
	


     
  }

  































// position: absolute;
// width: 1316px;
// height: 630px;
// left: 67px;
// top: 291px;

// background: linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
// backdrop-filter: blur(20px);

// /* Note: backdrop-filter has minimal browser support */
// border-radius: 15px;


// background: "rgba( 255, 255, 255, 0.3 )",width:"70%",height:"550px",background:"white",marginLeft:"15%",marginTop:"65px",borderRadius:"0.3rem",opacity:"0.5",backdropFilter:"blur(0px)"

class App extends React.Component {
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
		
	}
	render(){
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
		
		new Slider({
			section: '#js-section',
			dots: '#js-dots',
			
	
		  });
		new Slider({
			section: '#js-section2',
			dots: '#js-dots2',
			
	
		  });
		new Slider({
			section: '#js-section3',
			dots: '#js-dots3',
			
	
		  });
		  
	
		
		   
		
		return (
			<div className="App">
				
				<div className="events-bg">
					<br></br>
					<br></br>
					<br></br>
					{/* <br></br> */}
					<h1  id="main-heading">EVENTS</h1>
	
					<div className={clicked||clicked2||clicked3?'firstoff':'firston'}>
					<div  >
						{/* <div className="events-flexin" onClick={()=> this.setState({clicked:true})} >
							<img src={im1}></img>
						</div>
						<div className="events-flexin first" onClick={()=> this.setState({clicked:true})}>
							<img src={im2}></img>
						</div>
						<div className="events-flexin first" onClick={()=> this.setState({clicked:true})}>
							<img src={im3}></img>
						</div> */}
						<center>
						<ul  className="firstpagelist">
							<li ><div style={elemStyle} id = "online" onClick={()=> this.setState({clicked:true})} >
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text">ONLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'offline' onClick={()=> this.setState({clicked2:true})}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text">OFFLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'talks' onClick={()=> this.setState({clicked3:true})}>
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
					<div  className={clicked?'secondon':'secondoff'}>
					<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine?'secondoff':'secondon'}>
					<div className={clicked?'secondon':'secondoff'}>
						<center>
							<div id='blur'>
								<br></br>
								<img id='close' src='./exit.png'   onClick={()=> this.setState({clicked:false})}></img>
									<h1 id='online-heading'>ONLINE EVENTS</h1>
									
								<ul className="nav-dots" id="js-dots" style={{marginTop:'0.8%'}}>
								<li className="nav-dot is-active" ></li>
								<li className="nav-dot" ></li>
								<li className="nav-dot" ></li>
								
								</ul>
	
								<main className="main" id = 'js-section'>
								<section className="section is-active"id="section1">
								
									<ul id="list" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event1</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event2</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventthree:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event3</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section2">
								
									<ul id="list1" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventfour:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event 4</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventfive:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event 5</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventsix:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event 6</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventseven:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event 7</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventeight:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event 8</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventnine:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id='text'>Event 9</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
	
	
					<div >
					<div className={clickedtwo?'secondon':'secondoff'}>
						<center>
						<div id='outer' >
							<div id='inner' >
							<div id='inner-left'>
								<div id='fake'></div>
							<img id='close2' src='./exit.png'   onClick={()=> this.setState({clickedtwo:false})}></img>
								<center><img id='left-post' src="./poster.png"></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head' >1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({clickedtwo:false})}></img>
								<center><h1 id='sub-head'>EVENT 1</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventtwo?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventtwo:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventtwo:false})}></img>
								<center><h1 id='sub-head'>Event 2</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventthree?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventthree:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventthree:false})}></img>
								<center><h1 id='sub-head'>Event 3</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventfour?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id="fake"></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventfour:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventfour:false})}></img>
								<center><h1 id='sub-head'>Event 4</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventfive?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventfive:false})}></img>

								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventfive:false})}></img>
								<center><h1 id='sub-head'>Event 5</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventsix?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventsix:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventsix:false})}></img>
								<center><h1 id='sub-head'>Event 6</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventseven?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventseven:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventseven:false})}></img>
								<center><h1 id='sub-head'>Event 7</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventeight?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventeight:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventeight:false})}></img>
								<center><h1 id='sub-head'>Event 8</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventnine?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventnine:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventnine:false})}></img>
								<center><h1 id='sub-head'>Event 9</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					</div>
					</div>
					<div  className={clicked2?'secondon':'secondoff'}>
					<div className={clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff?'secondoff':'secondon'}>
					<div className={clicked2?'secondon':'secondoff'}>
						<center>
							<div id='blur' >
								<br></br>
								<img id='close' src='./exit.png'   onClick={()=> this.setState({clicked2:false})}></img>
									<h1 id='online-heading'>OFFLINE EVENTS</h1>
									
								<ul className="nav-dots" id="js-dots2" style={{marginTop:'0.8%'}}>
								<li className="nav-dot is-active" ></li>
								<li className="nav-dot" ></li>
								<li className="nav-dot" ></li>
								
								</ul>
	
								<main className="main" id = 'js-section2'>
								<section className="section is-active"id="section1">
								
									<ul id="list" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwooff:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event1</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventtwooff:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event2</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventthreeoff:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event3</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section2">
								
									<ul id="list1" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventfouroff:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 4</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventfiveoff:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 5</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventsixoff:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 6</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventsevenoff:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 7</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventeightoff:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 8</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventnineoff:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 9</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
	
	
					<div >
					<div className={clickedtwooff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({clickedtwooff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({clickedtwooff:false})}></img>
								<center><h1 id='sub-head'>EVENT 1 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventtwooff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventtwooff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventtwooff:false})}></img>
								<center><h1 id='sub-head'>Event 2 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventthreeoff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventthreeoff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventthreeoff:false})}></img>
								<center><h1 id='sub-head'>Event 3 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventfouroff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventfouroff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventfouroff:false})}></img>
								<center><h1 id='sub-head'>Event 4 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventfiveoff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventfiveoff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventfiveoff:false})}></img>
								<center><h1 id='sub-head'>Event 5 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventsixoff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventsixoff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventsixoff:false})}></img>
								<center><h1 id='sub-head'>Event 6 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventsevenoff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventsevenoff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventsevenoff:false})}></img>
								<center><h1 id='sub-head'>Event 7 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventeightoff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventeightoff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventeightoff:false})}></img>
								<center><h1 id='sub-head'>Event 8 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventnineoff?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventnineoff:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventnineoff:false})}></img>
								<center><h1 id='sub-head'>Event 9 OFFLINE</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					</div>
					</div>
					<div  className={clicked3?'secondon':'secondoff'}>
					<div className={clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'secondoff':'secondon'}>
					<div className={clicked3?'secondon':'secondoff'}>
						<center>
							<div id='blur' >
								<br></br>
								<img id='close' src='./exit.png'   onClick={()=> this.setState({clicked3:false})}></img>
									<h1 id='online-heading'>TALKS</h1>
									
								<ul className="nav-dots" id="js-dots3" style={{marginTop:'0.8%'}}>
								<li className="nav-dot is-active" ></li>
								<li className="nav-dot" ></li>
								<li className="nav-dot" ></li>
								
								</ul>
	
								<main className="main" id = 'js-section3'>
								<section className="section is-active"id="section1">
								
									<ul id="list" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwotal:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event1</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventtwotal:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event2</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventthreetal:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event3</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section2">
								
									<ul id="list1" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventfourtal:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 4</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventfivetal:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 5</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventsixtal:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 6</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventsevental:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 7</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventeighttal:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 8</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({eventninetal:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 id="text">Event 9</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
	
	
					<div >
					<div className={clickedtwotal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({clickedtwotal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png' style={{width:'40px',marginLeft:'80%',marginTop:'5%',cursor:'pointer'}}  onClick={()=> this.setState({clickedtwotal:false})}></img>
								<center><h1 id='sub-head'>EVENT 1 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventtwotal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventtwotal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png' style={{width:'40px',marginLeft:'80%',marginTop:'5%',cursor:'pointer'}}  onClick={()=> this.setState({eventtwotal:false})}></img>
								<center><h1 id='sub-head'>Event 2 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventthreetal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventthreetal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png' style={{width:'40px',marginLeft:'80%',marginTop:'5%',cursor:'pointer'}}  onClick={()=> this.setState({eventthreetal:false})}></img>
								<center><h1 id='sub-head'>Event 3 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventfourtal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventfourtal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventfourtal:false})}></img>
								<center><h1 id='sub-head'>Event 4 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventfivetal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventfivetal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventfivetal:false})}></img>
								<center><h1 id='sub-head'>Event 5 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventsixtal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
								<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventsixtal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventsixtal:false})}></img>
								<center><h1 id='sub-head'>Event 6 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventsevental?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventsevental:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventsevental:false})}></img>
								<center><h1 id='sub-head'>Event 7 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventeighttal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventeighttal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventeighttal:false})}></img>
								<center><h1 id='sub-head'>Event 8 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					<div className={eventninetal?'secondon':'secondoff'}>
						<center>
						<div id='outer'>
							<div id='inner'>
							<div id='inner-left'>
							<div id='fake'></div>
								<img id='close2' src='./exit.png'   onClick={()=> this.setState({eventninetal:false})}></img>
								<center><img src="./poster.png" id='left-post'></img>
								<h3 id='sub-left-head'>Contact:Event Coheads</h3>
								<h4 id='sub-sub-left-head'>1.Abcd Xyz (9884736273)</h4>
								<h4 id='sub-sub-left-head'>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div id='inner-right'>
								<img id='close1' src='./exit.png'   onClick={()=> this.setState({eventninetal:false})}></img>
								<center><h1 id='sub-head'>Event 9 TALK</h1>
								
								</center>
								<div id='para'>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button id='button-right'>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					</div>
					</div>
				</div>
				

				


				
			 
				
				
			</div>
	
			
		);
	}
	
}	



export default App;
