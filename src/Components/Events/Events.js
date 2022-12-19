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
    backgroundSize:'cover',
    width:"230px",
    height:"230px",
    cursor:"pointer",
  }
  const elemStyle1 = {
    // hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    // backgroundImage:'url(./border.png)',
    
    // backgroundColor:'black',
    // backgroundImage'url(./border.png)',
    backgroundSize:'cover',
    width:"14vw",
    height:"14vw",
    cursor:"pointer",
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
		this.state = {clickedtwo:false};
		
	}
	render(){
		const clicked = this.state.clicked;
		const clickedtwo = this.state.clickedtwo;
		
		new Slider({
			section: '#js-section',
			dots: '#js-dots',
			
	
		  });
		  
	
		
		   
		
		return (
			<div className="App">
				<MediaQuery minWidth={1000}>
				<div className="events-bg">
					<br></br>
					<br></br>
					<br></br>
					{/* <br></br> */}
					<h1 style={{ color: "white", fontSize: "50px",}}>EVENTS</h1>
	
					<div className={clicked?'firstoff':'firston'}>
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
						<ul style={listStyle}>
							<li ><div style={elemStyle} id = "online" onClick={()=> this.setState({clicked:true})} >
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1 style={{color:"white",fontSize:"34px"}}>ONLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'offline' onClick={()=> this.setState({clicked:true})}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1 style={{color:"white",fontSize:"34px"}}>OFFLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemStyle} id = 'talks' onClick={()=> this.setState({clicked:true})}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1 style={{color:"white",fontSize:"34px"}}>TALKS</h1></center>
							</div>
							</div></li>
						</ul>
						<br></br>
						<br></br>
						<center>
						{/* <img src={im4}  className="events-rb first"></img>  */}
						<div className='buttondiv' style={{width:'280px'}}>
							<img src={im4}  className="buttonimg"></img> 
						</div>
						</center>
					</div>
					</div>
					<div className={clickedtwo?'secondoff':'secondon'}>
					<div className={clicked?'secondon':'secondoff'}>
						<center>
							<div style={{width:'70%',background: "rgba(255, 255, 255, 0.15)",height:'33vw',marginTop:'-1.3%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
								<br></br>
								<img id='close' src='./exit.png' style={{width:'40px',marginLeft:'88%',marginTop:'2%',cursor:'pointer'}}  onClick={()=> this.setState({clicked:false})}></img>
									<h1 style={{color:'white',fontSize:'3.2vw',marginTop:'-3%'}}>ONLINE EVENTS</h1>
									
								<ul className="nav-dots" id="js-dots" style={{marginTop:'0.8%'}}>
								<li className="nav-dot is-active" ></li>
								<li className="nav-dot" ></li>
								<li className="nav-dot" ></li>
								
								</ul>
	
								<main className="main" id = 'js-section'>
								<section className="section is-active"id="section1">
								
									<ul id="list" style={listStyle2}>
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event1</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event2</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event3</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section2">
								
									<ul id="list1" style={listStyle2}>
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event 4</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event 5</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event 6</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section3">
								
									<ul id="list2" style={listStyle2}>
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event 7</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event 8</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2vw"}}>Event 9</h1></center>
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
						<div style={{width:'70%',background: "rgba(255, 255, 255, 0.15)",height:'480px',marginTop:'-1.3%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
							<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
							<div style={{width:'50%',height:'500px'}}>
								<center><img src="./poster.png" style={{width:'55%',height:'55%',marginTop:'5.8vw',marginLeft:'-3%'}}></img>
								<h3 style={{marginLeft:'-3%',marginTop:'-1%',color:'#FFC200'}}>Contact:Event Coheads</h3>
								<h4 style={{marginLeft:'-3.5%',color:'white',marginTop:'-2%'}}>1.Abcd Xyz (9884736273)</h4>
								<h4 style={{marginLeft:'-3.5%',color:'white',marginTop:'-2%'}}>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div style={{width:'50%',height:'500px'}}>
								<img id='close' src='./exit.png' style={{width:'40px',marginLeft:'80%',marginTop:'5%',cursor:'pointer'}}  onClick={()=> this.setState({clickedtwo:false})}></img>
								<center><h1 style={{color:'#FFC200',marginTop:'0%',fontSize:'45px',marginLeft:'-25%'}}>LOREM IPSUM</h1>
								
								</center>
								<div style={{color:'white',width:'77%',marginLeft:'-20%',fontSize:'17px',textAlign:'justify'}}>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button style={{width:"40%",backgroundColor:'white',borderRadius:'5px',height:'48px',borderColor:'white',marginTop:'8%',marginLeft:'-25%',fontSize:'25px',fontWeight:'550',cursor:'pointer'}}>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					</div>
				</div>
				</MediaQuery>

				{/*second media query */}


				<MediaQuery minWidth={700} maxWidth={1000}>
				<div className="events-bg">
					<br></br>
					<br></br>
					<br></br>
					{/* <br></br> */}
					{/* <br></br> */}
					{/* <br></br> */}
					<br></br>
					<h1 style={{ color: "white", fontSize: "50px"}}>EVENTS</h1>
	
					<div className={clicked?'firstoff':'firston'}>
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
						{/* <br></br> */}
						{/* <br></br> */}
						<ul style={listStyle} >
							<li ><div style={elemstyle700} id = "online" onClick={()=> this.setState({clicked:true})} >
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1 style={{color:"white",fontSize:"27px"}}>ONLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemstyle700} id = 'offline' onClick={()=> this.setState({clicked:true})}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1 style={{color:"white",fontSize:"27px"}}>OFFLINE</h1></center>
							</div>
							</div></li>
							<li><div style={elemstyle700} id = 'talks' onClick={()=> this.setState({clicked:true})}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1 style={{color:"white",fontSize:"27px"}}>TALKS</h1></center>
							</div>
							</div></li>
						</ul>
						<br></br>
						<br></br>
						<center>
						{/* <img src={im4}  className="events-rb first"></img>  */}
						<div className='buttondiv' style={{width:'280px'}}>
							<img src={im4}  className="buttonimg"></img> 
						</div>
						</center>
					</div>
					</div>
					<div className={clickedtwo?'secondoff':'secondon'}>
					<div className={clicked?'secondon':'secondoff'}>
						<center>
							<div style={{width:'70%',background: "rgba(255, 255, 255, 0.15)",height:'300px',marginTop:'4%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
								<br></br>
								<img id='close' src='./exit.png' style={{width:'30px',marginLeft:'86%',marginTop:'10px',cursor:'pointer'}}  onClick={()=> this.setState({clicked:false})}></img>
									<h1 style={{color:'white',fontSize:'25px',marginTop:'-3%'}}>ONLINE EVENTS</h1>
									
								<ul className="nav-dots1" id="js-dots" style={{}} >
								<li className="nav-dot is-active" ></li>
								<li className="nav-dot" ></li>
								<li className="nav-dot" ></li>
								
								</ul>
	
								<main className="main" id = 'js-section'>
								<section className="section is-active"id="section1">
								
									<ul id="list" style={listStyle2}>
									<li ><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event1</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event2</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event3</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section2">
								
									<ul id="list1" style={listStyle2}>
									<li ><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event 4</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event 5</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event 6</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section3">
								
									<ul id="list2" style={listStyle2}>
									<li ><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event 7</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event 8</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemstyle1700} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.4vw"}}>Event 9</h1></center>
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
						<div style={{width:'70%',background: "rgba(255, 255, 255, 0.15)",height:'420px',marginTop:'-1.3%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
							<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
							<div style={{width:'50%',height:'500px'}}>
								<center><img src="./poster.png" style={{width:'200px',height:'200px',marginTop:'50px',marginLeft:'-3%'}}></img>
								<h4 style={{marginLeft:'-3%',marginTop:'-1%',color:'#FFC200'}}>Contact:Event Coheads</h4>
								<h5 style={{marginLeft:'-3.5%',color:'white',marginTop:'-2%'}}>1.Abcd Xyz (9884736273)</h5>
								<h5 style={{marginLeft:'-3.5%',color:'white',marginTop:'-2%'}}>2.Abcd Xyz (9884736273)</h5>
								</center>
							</div>
							<div style={{width:'50%',height:'500px'}}>
								<img id='close' src='./exit.png' style={{width:'30px',marginLeft:'78%',marginTop:'6%',cursor:'pointer'}}  onClick={()=> this.setState({clickedtwo:false})}></img>
								<center><h1 style={{color:'#FFC200',marginTop:'0%',fontSize:'25px',marginLeft:'-25%'}}>LOREM IPSUM</h1>
								
								</center>
								<div style={{color:'white',width:'77%',marginLeft:'-20%',fontSize:'15px',textAlign:'justify'}}>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button style={{width:"40%",backgroundColor:'white',borderRadius:'5px',height:'48px',borderColor:'white',marginTop:'8%',marginLeft:'-25%',fontSize:'25px',fontWeight:'550',cursor:'pointer'}}>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					</div>
				</div>
				</MediaQuery>


				{/*Third media query */}


				<MediaQuery  maxWidth={700}>
				<div className="events-bg1">
					<br></br>
					{/* <br></br> */}
					{/* <br></br> */}
					{/* <br></br> */}
					{/* <br></br> */}
					{/* <br></br> */}
					{/* <br></br> */}
					<div style={{width:'85%',marginLeft:'0'}}>
						<h1 style={{ color: "white", fontSize: "50px",paddingLeft:'50px',paddingBottom:'9px'}}>EVENTS</h1>
						{/* <br></br> */}
						<div className={clicked?'firstoff':'firston'}>
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
							{/* <br></br> */}
							{/* <br></br> */}
							<center>
							<ul style={listStylemob} >
								<li ><div style={elemstyle700mob} id = "online" onClick={()=> this.setState({clicked:true})} >
								<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
								<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
									<center><h1 style={{color:"white",fontSize:"2.5vh"}}>ONLINE</h1></center>
								</div>
								</div></li>
								<li><div style={elemstyle700mob} id = 'offline' onClick={()=> this.setState({clicked:true})}>
								<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
								<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
									<center><h1 style={{color:"white",fontSize:"2.5vh"}}>OFFLINE</h1></center>
								</div>
								</div></li>
								<li><div style={elemstyle700mob} id = 'talks' onClick={()=> this.setState({clicked:true})}>
								<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
								<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
									<center><h1 style={{color:"white",fontSize:"2.5vh"}}>TALKS</h1></center>
								</div>
								</div></li>
							</ul>
							</center>
							<br></br>
							{/* <br></br> */}
							<center>
							{/* <img src={im4}  className="events-rb first"></img>  */}
							<div className='buttondiv' style={{width:'280px',marginLeft:'46px'}}>
								<img src={im4}  className="buttonimg"></img> 
							</div>
							</center>
						</div>
						</div>
					</div>
					<div className={clickedtwo?'secondoff':'secondon'}>
					<div className={clicked?'secondon':'secondoff'}>
						<center>
							<div style={{width:'70%',marginLeft:'-3%',background: "rgba(255, 255, 255, 0.15)",height:'80vh',marginTop:'4%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
								<br></br>
								<img id='close' src='./exit.png' style={{width:'20px',marginLeft:'86%',marginTop:'5px',cursor:'pointer'}}  onClick={()=> this.setState({clicked:false})}></img>
									<h1 style={{color:'white',fontSize:'28px',marginTop:'1%'}}>ONLINE EVENTS</h1>
									<br></br>
									
								<ul className="nav-dots2" id="js-dots"  >
								<li className="nav-dot is-active" ></li>
								<li className="nav-dot" ></li>
								<li className="nav-dot" ></li>
								
								</ul>
	
								<main className="main" id = 'js-section'>
								<section className="section is-active"id="section1">
								
									<ul id="list" style={listStyle2mob}>
									<li ><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event1</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event2</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event3</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section2">
								
									<ul id="list1" style={listStyle2mob}>
									<li ><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event 4</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event 5</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event 6</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section3">
								
									<ul id="list2" style={listStyle2mob}>
									<li ><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event 7</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event 8</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemmobst} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"2.1vh"}}>Event 9</h1></center>
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
						<div style={{width:'70%',background: "rgba(255, 255, 255, 0.15)",height:'80vh',marginTop:'-1.3%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
							<div style={{display:'block',alignItems:'center',justifyContent:'space-evenly'}}>
							<div style={{width:'90%',height:'500px',marginLeft:'5%'}}>
							<img id='close' src='./exit.png' style={{width:'30px',marginLeft:'78%',marginTop:'8%',cursor:'pointer'}}  onClick={()=> this.setState({clickedtwo:false})}></img>
								<center><img src="./poster.png" style={{width:'200px',height:'200px',marginTop:'20px',marginLeft:'-3%'}}></img>
								{/* <img id='close' src='./exit.png' style={{width:'30px',marginLeft:'78%',marginTop:'6%',cursor:'pointer'}}  onClick={()=> this.setState({clickedtwo:false})}></img> */}
								<center><h1 style={{color:'#FFC200',marginTop:'20px',fontSize:'22px'}}>LOREM IPSUM</h1>
								
								</center>
								<center>
								<div style={{color:'white',width:'200px',fontSize:'11px',textAlign:'justify'}}>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								</center>
								<center><button style={{width:"40%",backgroundColor:'white',borderRadius:'5px',height:'3%',borderColor:'white',marginTop:'8%',fontSize:'4.5vw',fontWeight:'550',cursor:'pointer'}}>Register</button></center>
								</center>
							</div>
							{/* <div style={{width:'50%',height:'500px'}}>
								<img id='close' src='./exit.png' style={{width:'30px',marginLeft:'78%',marginTop:'6%',cursor:'pointer'}}  onClick={()=> this.setState({clickedtwo:false})}></img>
								<center><h1 style={{color:'#FFC200',marginTop:'0%',fontSize:'25px',marginLeft:'-25%'}}>LOREM IPSUM</h1>
								
								</center>
								<div style={{color:'white',width:'77%',marginLeft:'-20%',fontSize:'15px',textAlign:'justify'}}>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button style={{width:"40%",backgroundColor:'white',borderRadius:'5px',height:'48px',borderColor:'white',marginTop:'8%',marginLeft:'-25%',fontSize:'25px',fontWeight:'550',cursor:'pointer'}}>Register</button></center>
							</div> */}
							</div>
						</div>
						</center>
					</div>
					</div>
				</div>
				</MediaQuery>
			 
				
				
			</div>
	
			
		);
	}
	
}	



export default App;
