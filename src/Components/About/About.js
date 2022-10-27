import React from "react";
// import "./About.css";
import MediaQuery from 'react-responsive';
import './index.css';

function About() {
  const myStyleh1 = {
    color: "white",
    // marginTop:"50px",
    fontSize:"40px",
    fontFamily:"Roboto Slab,serif",
    // zIndex:"20"
    // background: URL("starry-sky-purple-sky-astronomical-stars-5k-6000x4000-1022\ 2.png"),

    
  };

  
  const textStyle={
    fontSize:"20.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
    // background: URL("starry-sky-purple-sky-astronomical-stars-5k-6000x4000-1022\ 2.png"),
    // zIndex:"20"
    


  }
  const textStyle1={
    fontSize:"11.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
    // background: URL("starry-sky-purple-sky-astronomical-stars-5k-6000x4000-1022\ 2.png"),
    // zIndex:"20"
    


  }
  const textPara2={
    fontSize:"20.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
    // background: URL("starry-sky-purple-sky-astronomical-stars-5k-6000x4000-1022\ 2.png"),
    // zIndex:"20"
  }
  const textPara1={
    fontSize:"11.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
    // background: URL("starry-sky-purple-sky-astronomical-stars-5k-6000x4000-1022\ 2.png"),
    // zIndex:"20"
  }
  // const myStyle={
    // width:"100%",
    // height:"auto",
    // height:"100px",
    // backgroundImage:URL("starry-sky-purple-sky-astronomical-stars-5k-6000x4000-1022 2.png"),
    // background:"black",
    // display:"block",
    // justifyContent:"center",
    // alignItems:"center",

  // }
 
  return (
    <div className="Appone">
      <br></br>
      
      <div>
        <h1 style={myStyleh1}>About Us</h1>
      </div>
      <br></br>
      <div id="container">
          <div className="GradientBorder">
            <div className="hide">
          <MediaQuery minWidth={700}>
            <p className='text' style={textStyle}>&nbsp;&nbsp;IIT Goa, only six years into its inception, has already grown to be a highly sought-after institution for engineering aspirants throughout the country, nestled into the vast and beautiful campus of GEC in Farmagudi with a vibrant population of over three thousand students and five hundred faculty members. With Cepheus, we strive to achieve excellence in technical endeavours; however, we are not untouched by the rich and unique culture of Goa, which will be reflected in the fest’s various subtleties.
              </p>
          </MediaQuery>

          <MediaQuery maxWidth={700}>
            <p className='text' style={textStyle1}>&nbsp;&nbsp;IIT Goa, only six years into its inception, has already grown to be a highly sought-after institution for engineering aspirants throughout the country, nestled into the vast and beautiful campus of GEC in Farmagudi with a vibrant population of over three thousand students and five hundred faculty members. With Cepheus, we strive to achieve excellence in technical endeavours; however, we are not untouched by the rich and unique culture of Goa, which will be reflected in the fest’s various subtleties.
              </p>
          </MediaQuery>
          <MediaQuery minWidth={700}>
              <p className='text' style={textPara2}>
              &nbsp;&nbsp;Cepheus is a celebration of our technical prowess - not just as an institution, but as a country. It aims at instilling a sense of collective learning by being a melting pot of ideas open to students of various institutions and disciplines. With intriguing events and competitions, along with resourceful workshops by experts and professionals, we wish to make Cepheus ‘22 a memorable experience for all concerned.
              </p>
          </MediaQuery>
          <MediaQuery maxWidth={700}>
              <p className='text' style={textPara1}>
              &nbsp;&nbsp;Cepheus is a celebration of our technical prowess - not just as an institution, but as a country. It aims at instilling a sense of collective learning by being a melting pot of ideas open to students of various institutions and disciplines. With intriguing events and competitions, along with resourceful workshops by experts and professionals, we wish to make Cepheus ‘22 a memorable experience for all concerned.
              </p>
          </MediaQuery>
          </div>
          </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    </div>
  );
}
export default About;
