import React, { Component } from "react";

export class AddTask extends Component {
  state = {
    taskTitle: "",
    id: "",
    isComplete: false
  };

  changeHandler = event => {
    this.setState({ taskTitle: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({
      taskTitle: "",
      id: "",
      isComplete: false
    });
  };

  render() {
    return (
      <div className="container mt-2">
        <form className="form form-inline" onSubmit={this.onSubmit}>
          <input
            className="form-element col"
            type="text"
            value={this.state.taskTitle}
            onChange={this.changeHandler}
            placeholder="Add Task ..."
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-dark text-white col-3 p-1 ml-2"
          />
        </form>
      </div>
    );
  }
}

export default AddTask;
