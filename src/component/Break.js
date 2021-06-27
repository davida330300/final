import React from "react"
import './Break.css'
import { Button } from '@material-ui/core';
export default function Break(props){

  return (
    <div className="Break-time">
      <h2 className="title">Break Time</h2>
      <div className = "button-container">
        <Button id="increament" onClick={props.increamentBreak}>+</Button>
        <h2 id="time">{props.breakLength}</h2>
        <Button id="decraement" onClick={props.decreamentBreak}>-</Button>
      </div>
    </div>
  )
}