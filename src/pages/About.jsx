import React from "react"
import s from '../style/About.module.scss'
import Sortering from "../components/Sortering/Sortering"

export const About =()=>{
    return(
    <main className={s.mainStyle}>
        
     <h2>Welcome to the Star Wars Codex</h2>
     <p>The Star Wars Codex is your ultimate gateway into the galaxy far, far away. 
        Whether you are a longtime fan or a newcomer, this application serves as a
         comprehensive guide to all the Star Wars films. Our platform is designed to 
         give you detailed insights into every Star Wars movie ever created, from the 
         original trilogy to the latest releases.
    </p>
         <h3>Why Use the Star Wars Codex?</h3>
         <ul>
            <li>For Fans, by Fans: The Star Wars Codex was crafted by passionate Star Wars
                 fans who wanted to provide a comprehensive database for fellow fans.
            </li>
                 <li>Stay Up-to-Date: Keep track of the latest Star Wars movies and productions as 
                    they’re added to the universe.
                </li>
                    <li>Dive into the Star Wars Lore: The Star Wars saga is vast, and our app will 
                        help you navigate its deep and rich history, movie by movie.
                    </li>
         </ul>
    </main>
    )
}