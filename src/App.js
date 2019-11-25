import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/Todos/TodoInput";
import TodoList from "./components/Todos/TodoList";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [],
    title: "",
    id: uuid(),
    editItem: false
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => {
        this.setState({ todos: json.slice(0, 5) });
        console.log(this.state);
      });
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const updTodos = [
      { id: uuid(), title: this.state.title, completed: false },
      ...this.state.todos
    ];
    this.setState({
      todos: updTodos,
      title: "",
      id: uuid(),
      editItem: false
    });
    console.log(this.state);
  };

  clearList = () => {
    this.setState({
      todos: []
    });
  };

  handleDelete = id => {
    var filteredTodos = this.state.todos.filter(t => t.id !== id);
    this.setState({
      todos: filteredTodos
    });
  };

  handleEdit = id => {
    var filteredTodos = this.state.todos.filter(t => t.id !== id);
    var selectedTodo = this.state.todos.find(t => t.id === id);
    this.setState({
      todos: filteredTodos,
      title: selectedTodo.title,
      id: id,
      editItem: true
    });
  };
  handleCompletedTodo = id => {
    var newTodos = this.state.todos;
    console.log("old", this.state.todos);
    var selectedTodo = this.state.todos.find(t => t.id === id);
    selectedTodo.completed = !selectedTodo.completed;
    var index = this.state.todos.findIndex(t => t.id === id);
    newTodos[index] = selectedTodo;
    console.log("new", newTodos);
    this.setState({
      todos: newTodos,
      id: id
    });
  };

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-10 mx-auto mt-3 col-md-8">
            <h3 className="text-capitalize text-center"> TODOS </h3>
            <TodoInput
              title={this.state.title}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              todos={this.state.todos}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleCompletedTodo={this.handleCompletedTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*For using city tour project
import Navbar from "./components/Navbar";
import TourList from "./components/TourList";
<Navbar />
<TourList /> */
