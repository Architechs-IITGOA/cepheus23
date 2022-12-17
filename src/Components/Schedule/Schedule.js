import React from "react";
import "./Schedule.css";
import polygon from "../Schedule/Polygon 2.png";
import bigpolygon from "../Schedule/Polygon 6.png";
import { useState } from "react";
import { useEffect } from "react";

export default function Schedule() {
  const [leftPolygon, setLeftPolygon] = useState(false);
  const [rightPolygon, setRightPolygon] = useState(false);
  const [centrePolygon, setCentrePolygon] = useState(false);

  const [leftStyle, setLeftStyle] = useState("leftBefore");
  const [rightStyle, setRightStyle] = useState("rightBefore");

  useEffect(() => {
    if(leftPolygon === false && rightPolygon === false && centrePolygon === false){
      setLeftStyle("leftBefore");
      setRightStyle("rightBefore");
    }
  },[leftPolygon, rightPolygon, centrePolygon]);

  {console.log(leftPolygon, rightPolygon, centrePolygon)}
  return (
    <>
    <div style={{position:"relative"}}>
      <div className="dates"></div>
      <div className="schedule">
        <div className="scheduleHead">SCHEDULE</div>
        <div className="dates">
          <div
            className="polygon1"
            onClick={() => {
              setCentrePolygon(!centrePolygon);
              setLeftPolygon(false);
              setRightPolygon(false);
              setLeftStyle("leftAfter");
              setRightStyle("rightAfter");
            }}
          >
            <img src={polygon} alt="" />
            <div className="Feb">
              {leftPolygon && (
                <div >
                  <img
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "2",
                    }}
                    src={bigpolygon}
                    alt=""
                  />
                  <div className="Feb8Schedule" style={{ zIndex: "5",width:"450px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate fuga molestiae ed, expedita pariatur eius vel nihil incidunt nam, inventore enim quisquam cupiditate debitis fuga.
                  </div>
                </div>
              )}
              {centrePolygon && (
                <div >
                  <img
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "2",
                    }}
                    src={bigpolygon}
                    alt=""
                  />
                  <div className="Feb9Schedule" style={{ zIndex: "5",width:"450px" }}>
                    ribus dolorum dolor iusto iure similique vero doloremque soluta excepturi, quidem accusantium sunt nobis repudiandae voluptates. Voluptate, quae voluptas.
                  </div>
                </div>
              )}
              {rightPolygon && (
                <div >
                  <img
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "2",
                    }}
                    src={bigpolygon}
                    alt=""
                  />
                  <div className="Feb10Schedule" style={{ zIndex: "5" ,width:"450px"}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quae tempore perspiciatis at similique consequuntur incidunt vel iure eveniet tenetur? Inventore dolor odio ut sapiente facere dolorem culpa at architecto.
                  </div>
                </div>
              )}
              9 February
            </div>
          </div>
          <div
            className={leftStyle}
            onClick={() => {
              setLeftPolygon(!leftPolygon);
              setRightPolygon(false);
              setCentrePolygon(false);
              setLeftStyle("leftAfter");
              setRightStyle("rightAfter");
            }}
          >
            <img src={polygon} alt="" />
            <div className="Feb">8 February</div>
          </div>
          <div
            className={rightStyle}
            onClick={() => {
              setRightPolygon(!rightPolygon);
              setCentrePolygon(false);
              setLeftPolygon(false);
              setLeftStyle("leftAfter");
              setRightStyle("rightAfter");
            }}
          >
            <img src={polygon} alt="" />
            <div className="Feb">10 February</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
