import React from "react";
import { connect } from "react-redux";
import { addTask } from "./action";
import logo from "./logo.svg";
import "./App.css";

function App({ appState, addNewTask }) {
  function handleAddTask() {
    const task = document.querySelector(".task").value;
    addNewTask(task);
  }

  return (
    <div className="App">
      <h1>All your tasks</h1>
      <div className="tasks">
        {appState.tasks.map((task) => (
          <p>{task}</p>
        ))}
      </div>
      <input type="text" className="task" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  appState: state,
});
const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(addTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
