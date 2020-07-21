import React from "react";
import TodoListItem from "../TodoList-Item/TodoList-Item";

const TodoList = ({ todos , onDelete}) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps} = item;
        return(
            <TodoListItem {...itemProps} key={id} onDelete={() => onDelete(id)}/>   
        );
    });
    return <div className="task-table">{elements}</div>;
};

export default TodoList;

