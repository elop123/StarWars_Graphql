import React from "react"
import { NavLink } from "react-router-dom"
import { navLinks } from "../../navlinks"
import './Navbar.module.css'

export const Navbar =()=>{

 
    return(
     <nav>
     {navLinks.map((item, index)=>{
        return(<>
            <NavLink  to={item.link} key={index}>{item.title}</NavLink>
            
            </>
        )
     })}
       
    </nav>
    )
}