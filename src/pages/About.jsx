import React from "react"
import s from '../style/About.module.scss'
import Sortering from "../components/Sortering/Sortering"
import { Helmet } from "react-helmet"

export const About =()=>{
    return(
        <div>
           <head>
    <Helmet>
        <title>About</title>
        <meta name="description" content="Discover about the Star Wars. " />
        <meta name="keywords" content="Star wars, movies, characters, episodes, galaxy " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Star Wars" />
        <meta property="og:description" content="Learn more about Star Wars and characters" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/506f3521-4a2a-47de-90d5-b78e308d1135.jpg?token=pQOzsXaFza1qIQDqsCTkV0TrgvVcgVsJl60Ow-4h7NI&height=542&width=375&expires=33265598965" />
        <meta property="og:url" content="https://starwars2024.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="starwars2024.netlify.app"/>
        <meta property="twitter:url" content="https://starwars2024.netlify.app/"/>
        <meta name="twitter:title" content="Star Wars"/>
        <meta name="twitter:description" content="Discover more about Star Wars characters"/>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/506f3521-4a2a-47de-90d5-b78e308d1135.jpg?token=pQOzsXaFza1qIQDqsCTkV0TrgvVcgVsJl60Ow-4h7NI&height=542&width=375&expires=33265598965"/>
    </Helmet>
    </head>
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
        </div>
    
    )
}