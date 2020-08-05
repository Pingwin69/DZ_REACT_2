import React from "react";
import "./statistics.scss";

const Statistics = (props) => {
  return (
    <div className="stat">
      <p>
        Done: <span id="done-counter">{props.done}</span>
      </p>
      <p>
        Important: <span id="important-counter">{props.toDo}</span>
      </p>
    </div>
  );
};

export default Statistics;
