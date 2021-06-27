import React from "react";

export default class Footer extends React.Component {

  constructor(props) {
    super(props)

  }


  footVisible = () => {
    if (this.props.todos.length === 0) {
      return { opacity: "0" };
    }
  }

  cleanbutVisible = () => {
    if (this.props.todos.filter((todo) => todo.finish).length === 0) {
      return { opacity: "0" };
    }
  }

  setMode = (n) => {
    this.props.setMode(n)
    //console.log(n)
  }

  cleanComplete = () => {
    //console.log("clean complete")
    this.props.cleanComplete()


  }

  render() {
    return (

      <footer class="todo-app__footer" id="todo-footer" style={this.footVisible()}  >
        <div class="todo-app__total">{this.props.left} left</div>
        <ul class="todo-app__view-buttons">
          <button onClick={() => this.setMode(0)}>All</button>
          <button onClick={() => this.setMode(1)}>Active</button>
          <button onClick={() => this.setMode(2)}>Completed</button>
        </ul>
        <div class="todo-app__clean" style={this.cleanbutVisible()}>
          <button onClick={() => this.cleanComplete()}>Clear completed</button>
        </div>

      </footer >
    );
  }

}
