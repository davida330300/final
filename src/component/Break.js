import React from "react"
import './Break.css'
export default function Break(props){

  return (
    <div className="Break-time">
      <h2 className="title">Break Time</h2>
      <div className = "button-container">
        <button id="increament" onClick={props.incrementBreak}>+</button>
        <h2 id="time">{props.breakLength}</h2>
        <button id="decraement" onClick={props.decrementBreak}>-</button>
      </div>
    </div>
  )
}