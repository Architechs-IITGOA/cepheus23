import React from "react";
import "./Schedule.css";
import polygon from "../Schedule/Polygon 2.png";

export default function Schedule() {
  return (
    <>
      <div className="schedule">
        <div className="scheduleHead">SCHEDULE</div>
        <div className="scheduleCards">
          <div className="scheduleCard feb8">
            <p className="schedule-date">8 February</p>
            <div className="schedule-list">
                <ul>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                </ul>
            </div>
          </div>
          <div className="scheduleCard feb9">
            <p className="schedule-date">9 February</p>
            <div className="schedule-list">
                <ul>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                </ul>
            </div>
          </div>
          <div className="scheduleCard feb10">
            <p className="schedule-date">10 February</p>
            <div className="schedule-list">
                <ul>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                </ul>
            </div>
          </div>
          <div className="scheduleCard feb11">
            <p className="schedule-date">11 February</p>
            <div className="schedule-list">
                <ul>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                </ul>
            </div>
          </div>
          <div className="scheduleCard feb12">
            <p className="schedule-date">12 February</p>
            <div className="schedule-list">
                <ul>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                  <li>Bridge Builder</li>
                </ul>
            </div>
          </div>
        </div>
        
        {/* <div style={{ position: "relative" }}>
          <div className="scheduleDates">
            <div className="feb8">
              <img className="polygon" src={polygon} alt="" width="10px" />
              <div
                className="feb"
                data-hover={
                    <ul>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                  </ul>
                }
                data-before="February 8"
              ></div>
            </div>
            <div className="feb9">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 9"
              ></div>
            </div>
            <div className="feb10">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 10"
              ></div>
            </div>
            <div className="feb11">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 11"
              ></div>
            </div>
            <div className="feb12">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 12"
              ></div>
            </div> */}
          {/* </div>
        </div> */}
      </div>
    </>
  );
}
