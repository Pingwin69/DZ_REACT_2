import React from 'react';
import './App.css';


import Wrapper1 from './components/Wrapper1/Wrapper1';
import TodoList from './components/TodoList/TodoList';




class App extends React.Component {
  state = {
    todolist: [
      { message: "Task1", important: false, done: false, id: 1},
      { message: "Task2", important: false, done: false, id: 2},
      { message: "Task3", important: false, done: false, id: 3}
    ],
  };

  onDelete(id){
    console.log(id);
  }

  render(){
    const { todolist } = this.state;
  

  return (
    <div className="App">
      <Wrapper1/>
      <TodoList  todos={todolist} onDelete={this.onDelete}/>
    </div>
  );
 }
}



export default App;
