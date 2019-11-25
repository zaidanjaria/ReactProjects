import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  render() {
    const {
      title,
      handleDelete,
      handleEdit,
      handleCompletedTodo,
      completed
    } = this.props;
    var completedCss = completed
      ? "todo-complete font-weight-light"
      : "font-weight-normal";
    return (
      <li class="list-group-item text-capitalize d-flex justify-content-between my-1">
        <h5 className={completedCss}>{title}</h5>
        <div className="todo-icon">
          <span className="mx-2 text-info" onClick={handleEdit}>
            <i className="fa fa fa-pencil"></i>
          </span>
          <span className="mx-1 text-success" onClick={handleCompletedTodo}>
            <i className="fa fa-check-square"></i>
          </span>
          <span className="mx-1 text-danger" onClick={handleDelete}>
            <i className=" fa fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
