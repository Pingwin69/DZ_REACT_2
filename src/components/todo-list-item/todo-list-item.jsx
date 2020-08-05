import React, { Component } from "react";

import "./todo-list-item.scss";


class ToDoListItem extends Component {

  render() {
    const { message, done, important } = this.props;
    let classNameText = "task-text";

    let clickHandler = () => {
      this.props.onToggle();
    };

    let removeHandler = () => {
      this.props.onDelete();
    };

    let boldHandler = () => {
      this.props.onImportant();
    }

    if(important){
      classNameText +=" task_is_important"
    }

    if (done) {
      classNameText += " task_is_done";
    }

    return (
      <div className="task-item">
        <span
          className={classNameText}
          onClick={() => {
            clickHandler();
          }}
        >
          {message}
        </span>
        <div className="controls">
          <i
            className="fa fa-trash"
            onClick={() => {
              removeHandler();
            }}
          />
          <i
           className="fa fa-star"
           onClick={() => {
             boldHandler();
           }}
           />
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
