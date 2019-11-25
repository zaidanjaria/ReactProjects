import React, { Component } from "react";

class TodoInput extends Component {
  state = {};
  render() {
    const { handleChange, title, editItem, handleSubmit } = this.props;

    return (
      <div className="card card-body m-2" style={{ width: "40rem" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              className="form-control text-capitalize"
              id="title"
              placeholder="Enter todo"
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success"
                : "btn btn-block btn-primary"
            }
          >
            {editItem ? "Edit Todo" : "Add Todo"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
