import React, { useEffect, useState } from "react";
import "./timeline.css";

const timeline = () => {
  return (
    <div className="timeline-wrapper">
      <h1>TIMELINE</h1>
      <div className="timelinetimelineWrapper">
        <TimelineSingle isLeft={true} date={"2023-04-11"} />
        <TimelineSingle isLeft={false} date={"2023-04-12"} />
        <TimelineSingle isLeft={true} date={"2023-04-13"} />
        <TimelineSingle isLeft={false} date={"2023-04-14"} />
        <TimelineSingle isLeft={true} date={"2023-04-15"} />
        <TimelineSingle isLeft={false} date={"2023-04-16"} />
      </div>
    </div>
  );
};

const TimelineSingle = ({ isLeft, date }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    console.log(date);
    if (new Date(date) < new Date()) {
      setIsCompleted(true);
    }
  }, []);
  return (
    <div
      className={
        isLeft ? "timelineSingleWrapperLeft" : "timelineSingleWrapperRight"
      }
    >
      <div
        className="timelinesingleContentWrapper"
        style={{
          textAlign: isLeft ? "right" : "left",
          borderLeft: isLeft ? null : "3px solid white",
          borderColor: isCompleted ? "#E30069" : "white",
          borderWidth: "3px",
          borderRight: isLeft ? "3px solid white" : null,
          translate: isLeft ? "1.2px" : "-1.2px",
        }}
      >
        {isCompleted && (
          <div
            className="round"                                              
            style={{
              left: !isLeft ? "calc(-10px - 1.5px)" : "",
              right: isLeft ? "calc(-10px - 1.5px)" : "",
            }}
          >
            <div></div>
          </div>
        )}
        <span>{date}</span>
        <h2>THIS IS A TITLE</h2>
      </div>
      <div></div>
    </div>
  );
};
export default timeline;
