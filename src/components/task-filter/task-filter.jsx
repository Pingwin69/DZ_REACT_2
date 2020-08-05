import React from "react";

import "./task-filter.scss";

const RESET = {
  All: "all_tasks",
  Important: "important_tasks",
  Done: "done_tasks",
};

class TaskFilter extends React.Component {
  state = { ...RESET, All: "all_tasks checked" };

  filterToggle = ({ target: { className } }) => {
    for (const key in RESET) {
      if (className.includes(RESET[key])) {
        const temp = RESET[key];
        this.props.filterTask(temp);
        this.setState({ ...RESET, [key]: `${temp} checked` });
      }
    }
  };

  render() {
    const btnArr = [];
    for (const key in this.state) {
      btnArr.push(<button className={this.state[key]}>{key}</button>);
    }
    return (
      <div id="filters" onClick={this.filterToggle}>
        {btnArr}
      </div>
    );
  }
}

export default TaskFilter;
