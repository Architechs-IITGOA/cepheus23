import { useState } from "react";
import "./EventCard.css";

export default function EventCard() {

  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div className="event-contact-card" onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
        <span className={isHovered? "event-card-border-wrap-outer active" : "event-card-border-wrap-outer"}>
          <span className={isHovered? "event-card-border-wrap active" : "event-card-border-wrap"}>
            <div className="event-card-border-div">
              <div className="event-card-content">
                {/* <img
                  src="img/hackoverflow.png"
                  alt="event-poster"
                  className="event-poster"
                ></img> */}
                <h3>Team Hack OverFlow</h3>
              </div>
            </div>
          </span>
        </span>
      </div>
    </>
  );
}
