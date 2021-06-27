import React from "react"
import './Focus.css'
export default function Focus(props){

  return (
    <div className="Focus-time">
      <h2 className="title">Focus Time</h2>
      <div className = "button-container">
        <button id="increament" onClick={props.incrementFocus}>+</button>
        <h2 id="time">{props.focusLength}</h2>
        <button id="decraement" onClick={props.decrementFocus}>-</button>
      </div>
    </div>
  )
}