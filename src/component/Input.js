import React from "react";
export default class Input extends React.Component {

  constructor(props) {
    super(props)

    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);

  }

  handleChange(e) {
    //console.log(e.target.value); 
    //console.log("change here");   
    this.setState({ value: e.target.value });  //state綁定value
  }

  addTodo(todo, e) {

    if (e.keyCode === 13 || todo.lenth > 0) {

      console.log("TODO:",todo);
      this.props.addTodo(todo);
      this.setState({ value: '' });

    }
    //console.log(todo);

  }

  render() {
    return (

      <input className="todo-app__input"
        type="text"
        value={this.state.value}  //value綁定state
        onChange={this.handleChange}
        onKeyDown={(ev) => this.addTodo(this.state.value, ev)} />

    );
  }

}
