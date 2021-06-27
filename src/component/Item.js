import React from "react";




export default class Item extends React.Component {

  constructor(props) {
    super(props);

    this.finishStateChange = this.finishStateChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  finishStateChange(id) {
    this.props.finishStateChange(id);


    //console.log(id)
    //alert(id);

  }

  removeTodo(id) {
    this.props.removeTodo(id);
    //console.log(id);
  }

  textFinish = () => {
    if (this.props.finish) {
      return { textDecoration: "line-through", opacity: "0.5" };
    }

  }



  render() {

    return (

      <li className="todo-app__item">
        <div class="todo-app__checkbox">

          <input type="checkbox"
            id={this.props.id}
            onClick={() => { this.finishStateChange(this.props.id) }}
            defaultchecked={this.props.todo.finish}
            checked={this.props.todo.finish}
          />
          <label for={this.props.id}></label>
        </div>

        <h1 class="todo-app__item-detail"
          // style={{ color: "red" ,textDecoration:"line-through",opacity:"0.5"  }} 
          style={this.textFinish()}
        >{this.props.todo.text} </h1>

        <img src="../image/x.png" class="todo-app__item-x" onClick={() => { this.removeTodo(this.props.id) }} />



      </li>

    );
  }

}
