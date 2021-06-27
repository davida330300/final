import React from 'react'

export default function Header(props) {
  return (
    <header className="todo-app__header">
      <h1 className="todo-app__title">{props.text}</h1>
    </header>
  )
}
