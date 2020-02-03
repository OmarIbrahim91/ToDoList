import React, { Component } from "react";

export class TaskList extends Component {
  render() {
    return this.props.taskTitles.map(task => (
      <tr key={task.id}>
        <td className="">
          <input
            type="checkbox"
            name="complete"
            id={task.id}
            onChange={e => {
              this.props.taskDone(e.target.id);
            }}
          />
        </td>
        <td className="d-flex justify-content-start">
          <label
            style={
              task.isComplete
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {task.taskTitle}
          </label>
        </td>
        <td className="">
          <button
            type="button"
            id={task.id}
            className="btn btn-danger"
            onClick={e => this.props.taskDelete(e.target.id)}
          >
            x
          </button>
        </td>
      </tr>
    ));
  }
}

export default TaskList;
