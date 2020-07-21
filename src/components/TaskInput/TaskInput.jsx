import React from 'react';
import "./TaskInput.scss";

function TaskInput(){
    return(
        <div className="TaskDiv">   
            <input className="TaskInput" placeholder="Write your request..."/>
        </div>
    );
}

export default TaskInput;