import React, { useRef } from "react";
import "../Home/Home.css";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import bluePlanet from "../Home/bluePlanet.png";
import rocket from "../Home/homeRocket.png";
import pink from "../Home/fullPink.png";
import land from "../Home/land.png";
const Home = () => {
  const ref = useRef();
  return (
    <div className="home">
      <Parallax className="home" pages={3} ref={ref}>
        <ParallaxLayer
          sticky={{ start: 0, end: 0.4 }}
          factor={2}
          offset={0}
          speed={2}
        >
          <img className="bluePlanet" src={bluePlanet} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <img className="rocket" src={rocket} alt="" />
          <div className="title">
            <div className="heading">CEPHEUS</div>
            <div className="subHeading">TECHNICAL FEST OF IIT GOA</div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <img className="pinkPlanet" src={pink} alt="" />
          <div className="theme">OUR <br/> THEME</div>
          <div className="themeDes">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos ipsam, in, ea repellendus unde, quia a soluta molestias
            eius id quibusdam perferendis? Nemo accusamus et aliquid ab eligendi
            recusandae cupiditate?
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          {" "}
          <img className="pink" src={pink} alt="" />
          <div className="thirdHome">
            <div className="journey"> THE JOURNEY BEGINS IN</div>
            <div className="clock"><Countdown className="clock" date={Date.now() + 3000000000} /></div>
          </div>
          <img className="land" src={land} alt="" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
