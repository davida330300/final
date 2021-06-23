import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <li>
        <Link to="/Todos">Todos</Link>
      </li>
      <li>

        <Link to="/Clock">Clock</Link>
      </li> 
      <li> 
        <Link to="/Tree">Tree</Link>
      </li>
    </div>
  )
}
