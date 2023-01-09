import React from "react";
import "./Schedule.css";
import polygon from "../Schedule/Polygon 2.png";
import bigpolygon from "../Schedule/Polygon 6.png";
import { useState } from "react";
import { useEffect } from "react";

export default function Schedule() {
  return (
    <>
      <div className="schedule">
        <div className="scheduleHead">SCHEDULE</div>
        <div style={{ position: "relative" }}>
          <div className="scheduleDates">
            <div className="feb8">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
