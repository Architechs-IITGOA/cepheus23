// import logo from './logo.svg';
import './Events.css';
import im1 from './Events-Images/online.png'
import im2 from './Events-Images/offline.png'
import im3 from './Events-Images/talks.png'
import im4 from './Events-Images/rulebook.png'
import background from "./events_page.png"
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
						<div className='buttondiv'>
							<img src={im4}  className="buttonimg"></img> 
						</div>
						</center>
					</div>
					</div>
					<div className={clickedtwo?'secondoff':'secondon'}>
					<div className={clicked?'secondon':'secondoff'}>
						<center>
							<div style={{width:'70%',background: "rgba(255, 255, 255, 0.15)",height:'490px',marginTop:'-1.3%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
								<br></br>
								<img id='close' src='./exit.png' style={{width:'40px',marginLeft:'88%',marginTop:'2%',cursor:'pointer'}}  onClick={()=> this.setState({clicked:false})}></img>
									<h1 style={{color:'white',fontSize:'38px',marginTop:'-2.5%'}}>ONLINE EVENTS</h1>
									
								<ul className="nav-dots" id="js-dots">
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
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event1</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event2</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event3</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section2">
								
									<ul id="list1" style={listStyle2}>
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event 4</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event 5</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event 6</h1></center>
									</div>
									</div></li>
								</ul>
								</section>
								<section className="section"id="section3">
								
									<ul id="list2" style={listStyle2}>
									<li ><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})}  >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event 7</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event 8</h1></center>
									</div>
									</div></li>
									<li><div className='event'  style={elemStyle1} onClick={()=> this.setState({clickedtwo:true})} >
									<img src="./border1.png" style={{width:'161%',marginLeft:"-25%",marginTop:'-19%'}}></img>
									<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
										<center><h1 style={{color:"white",fontSize:"34px"}}>Event 9</h1></center>
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
						<div style={{width:'70%',background: "rgba(255, 255, 255, 0.15)",height:'490px',marginTop:'-1.3%',backdropFilter:"blur(10px)",borderRadius:'15px',boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"}}>
							<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
							<div style={{width:'50%',height:'500px'}}>
								<center><img src="./poster.png" style={{width:'55%',height:'55%',marginTop:'12%',marginLeft:'-3%'}}></img>
								<h3 style={{marginLeft:'-3%',color:'#FFC200'}}>Contact:Event Coheads</h3>
								<h4 style={{marginLeft:'-3.5%',color:'white',marginTop:'-2%'}}>1.Abcd Xyz (9884736273)</h4>
								<h4 style={{marginLeft:'-3.5%',color:'white',marginTop:'-2%'}}>2.Abcd Xyz (9884736273)</h4>
								</center>
							</div>
							<div style={{width:'50%',height:'500px'}}>
								<img id='close' src='./exit.png' style={{width:'40px',marginLeft:'80%',marginTop:'5%',cursor:'pointer'}}  onClick={()=> this.setState({clickedtwo:false})}></img>
								<center><h1 style={{color:'#FFC200',marginTop:'0%',fontSize:'47px',marginLeft:'-25%'}}>LOREM IPSUM</h1>
								
								</center>
								<div style={{color:'white',width:'77%',marginLeft:'-20%',fontSize:'20px',textAlign:'justify'}}>Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!</div>
								<center><button style={{width:"40%",backgroundColor:'white',borderRadius:'5px',height:'48px',borderColor:'white',marginTop:'8%',marginLeft:'-25%',fontSize:'25px',fontWeight:'550',cursor:'pointer'}}>Register</button></center>
							</div>
							</div>
						</div>
						</center>
					</div>
					</div>
				</div>
				
				
			</div>
	
			
		);
	}
	
}	



export default App;
