import React, { Component } from "react";

import "./TodoList-Item.scss";


class TodoListItem extends Component {

  state = {
    doneOk: false,
  };
  render() {
    console.log(this.state);
    const { message, onDelete } = this.props;
    let classNameText = "task-text";

    let clickHandler = () => {
    
      this.setState(

        (prevState) => {
          return {
            doneOk: !prevState.doneOk,
          };
        }
      );
    };

    let removeHandler = () => {
      this.props.onDelete();
    };

    if (this.state.doneOk) {
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
          <i className="fa fa-star" 
            onClick={() => {
              removeHandler();
            }}
          />
        </div>
      </div>
    );
  }
}


export default TodoListItem;