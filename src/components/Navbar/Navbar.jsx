import React from "react"
import { NavLink } from "react-router-dom"
import { navLinks } from "../../navlinks"
//import './Navbar.module.css'
import s from './Navbar.module.scss'

export const Navbar =()=>{

 
    return(
     <nav className={s.navStyle}>
     {navLinks.map((item, index)=>{
        return(<>
            <NavLink  to={item.link} key={index}>{item.title}</NavLink>
            </>
        )
     })}
       
    </nav>
    )
}