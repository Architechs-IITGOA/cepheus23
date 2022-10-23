import React from "react";
// import "./About.css";
import MediaQuery from 'react-responsive';
import './index.css';

function About() {
  const myStyle = {
    color: "white",
    marginTop:"150px",
    fontSize:"40px",
    fontFamily:"Roboto Slab,serif",

    
  };

  
  const textStyle={
    fontSize:"20.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
    


  }
  const textStyle1={
    fontSize:"11.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
    


  }
  const textPara2={
    fontSize:"20.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
  }
  const textPara1={
    fontSize:"11.18px",
    // fontSize: idleFontSize / fontScale,
    color:"white",
    margin:"40px",
    fontFamily:"Roboto Slab,serif",
  }
  return (
    <div className="App">
      <h1 style={myStyle}>About Us</h1>
      <div >
        <div className='box glowing'>
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
  );
}
export default About;
