import React, { Component } from "react";
class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ],
    myTitle: "How to make boba",
    newTodo: ""
  };

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ newTodo: event.target.value });
    console.log(this.state.newTodo)
  };

  handleSubmit = event => {
    event.preventDefault()
    console.log("i submitted")
    console.log(this.state.newTodo)
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };
  handleDelete = event => {
    console.log("DELETE");
    var newTodoList = [...this.state.todos]; 
    var index = newTodoList.indexOf(event.target.value);
    newTodoList.splice(index, 1);
    this.setState({todos: newTodoList});
  };

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <li key={todo}> {todo}
          {todo + " "}
          <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> + </button>
          </form>
          <button onClick={this.handleDelete()}>X</button>
              <button  value={todo} onClick={this.handleDelete}>X</button>
          </li>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> + </button>
        </form>
      </div>
    );
  }
}

export default App;