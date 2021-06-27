import React from "react";
import Input from "./Input";
import Item from "./Item";



export default class Section extends React.Component {

  todoDisplay = (todos, mode) => {
    console.log("this is", mode)
    let todosReturn = []
    if (mode === 0) {
      todosReturn = todos
      console.log("all")
    }
    else if (mode === 1) {
      todosReturn = todos.filter((todo) => !todo.finish)
      console.log("active")
    }
    else {
      todosReturn = todos.filter((todo) => todo.finish)
      console.log("complete")
    }

    return todosReturn
  }



  render() {
    // console.log("haha"+this.props.todos)
    // console.log("mumi"+this.props.mode)
    return (
      <section className="todo-app__main">

        <Input addTodo={this.props.addTodo} />

        <ul class="todo-app__list" id="todo-list">
          {

            //this.props.todos.map((todo) => {
            
            this.todoDisplay(this.props.todos, this.props.mode).map((todo) => {
              return <Item todo={todo}
                key={todo.id}
                id={todo.id}
                finish={todo.finish}
                removeTodo={this.props.removeTodo}
                finishStateChange={this.props.finishStateChange}
              />
            })

          }
        </ul>


      </section>
    );
  }

}
