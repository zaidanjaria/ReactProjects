import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {};
  render() {
    const {
      todos,
      clearList,
      handleDelete,
      handleEdit,
      handleCompletedTodo
    } = this.props;
    return (
      <ul className="list-group my-3">
        <h3 className="text-capitalize text-center">todo list</h3>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              handleDelete={() => handleDelete(todo.id)}
              handleEdit={() => handleEdit(todo.id)}
              handleCompletedTodo={() => handleCompletedTodo(todo.id)}
            />
          );
        })}

        <button className="btn btn-block btn-danger" onClick={clearList}>
          {" "}
          Clear List
        </button>
      </ul>
    );
  }
}

export default TodoList;
