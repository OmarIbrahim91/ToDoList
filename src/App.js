import React, { Component } from "react";
import Header from "./components/header";
import AddTask from "./components/addTask";
import TaskList from "./components/tasklist";
import shortid from "shortid";
import "./App.css";
import About from "./components/about";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
  state = {
    taskTitles: []
  };

  //add task into state
  addTask = task => {
    task.id = shortid.generate();
    this.state.taskTitles.push(task);
    this.forceUpdate();
  };

  //complete task
  taskDone = taskID => {
    const selectedElem = this.state.taskTitles.filter(
      task => taskID === task.id
    );
    selectedElem[0].isComplete = !selectedElem[0].isComplete;
    this.forceUpdate();
  };

  //delete task
  taskDelete = taskID => {
    const restofElement = this.state.taskTitles.filter(
      task => taskID !== task.id
    );
    this.setState({ taskTitles: restofElement });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact
            render={props => (
              <React.Fragment>
                <AddTask addTask={this.addTask} />
                <table className="table mt-5 container">
                  <tbody>
                    <TaskList
                      taskTitles={this.state.taskTitles}
                      taskDone={this.taskDone}
                      taskDelete={this.taskDelete}
                    />
                  </tbody>
                </table>
              </React.Fragment>
            )}
          />
        </div>
        <Route path="/about" exact component={About} />
      </Router>
    );
  }
}

export default App;
