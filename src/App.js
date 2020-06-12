import React, { Component } from "react";

class App extends Component {
  state = {
    todo: "",
    todoList: [],
  };

  addTODO = () => {
    //unique id
    const todo = {
      id: 1 + Math.random(),
      value: this.state.todo.slice(),
    };

    //copy of current list
    const todoList = [...this.state.todoList];
    console.log(this.state.todo);
    if (!(todo.value == "")) {
      //adding todo to list
      todoList.push(todo);
    }
    //update state
    this.setState({
      todo: "",
      todoList,
    });
  };

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  deleteTodo = (id) => {
    //copy of list
    const list = [...this.state.todoList];

    //filter out item being deleted
    const updatedList = list.filter((item) => item.id != id);
    this.setState({ todoList: updatedList });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Add A TODO</h1>
          <input
            type="text"
            placeholder="TODO"
            value={this.state.todo}
            onChange={(e) => this.updateInput("todo", e.target.value)}
          ></input>
          <button onClick={() => this.addTODO()}>ADD</button>
          <ul>
            {this.state.todoList.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}

                  <button onClick={() => this.deleteTodo(item.id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
