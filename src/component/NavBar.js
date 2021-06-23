import React from 'react'
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom"
import noteImg from "../image/icons8-note-64.png";
import clkImg from "../image/icons8-clock-64.png";
import treeImg from "../image/icons8-tree-64.png";
// import

export default function NavBar() {
  const history = useHistory();
  const todoClick = ()=>{
    <Link to="/Todos"></Link>
  };
  const clkClick = ()=>{
    <Link to="/Clock"></Link>
  };
  const treeClick = ()=>{
    <Link to="/Tree"></Link>
  };  
  return (
    <div className="NavBar">

      <button className="clkBtn" onClick={()=>history.push('/Clock')}>
        <img src={clkImg} alt="note"></img>
        <Link to="/Clock"></Link>
      </button>
      <button className="todoBtn" onClick={()=>history.push('/Todos')}>
        <img src={noteImg} alt="note"></img>
        
      </button>

      <button calssName="treeBtn" onClick={()=>history.push('/Tree')}>
        <img src={treeImg} alt="note"></img>
        <Link to="/Tree"></Link>
      </button>
    </div>
  )
}
