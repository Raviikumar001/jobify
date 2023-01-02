import React from 'react'
import links from "../utils/links";
import { NavLink } from "react-router-dom";
const Navlinks = ({toggleSidebar}) => {
  return (
    <div className="nav-links">
    {links.map( (link) => {
      const {text, path, id, icon} = link
      return(

        <NavLink 
        to={path}
        key={id}
        onClick={({isActive})=> 
        isActive? 'nav-link active': 'nav-link'}
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      )
    })}          
  </div>
  )
}

export default Navlinks