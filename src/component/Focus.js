import React from "react"
import './Focus.css'
import { Button } from '@material-ui/core';
export default function Focus(props){

  return (
    <div className="Focus-time">
      <h2 className="title">Focus Time</h2>
      <div className = "button-container">
        <Button id="increament" onClick={props.increamentFocus}>+</Button>
        <h2 id="time">{props.focusLength}</h2>
        <Button id="decraement" onClick={props.decreamentFocus}>-</Button>
      </div>
    </div>
  )
}