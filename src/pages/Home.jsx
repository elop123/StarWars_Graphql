import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import {request} from "graphql-request"
import { allFilms } from "../queries/allfilms"
import { Link } from "react-router-dom"
import img1 from '../assets/images/01.jpg'
import img2 from '../assets/images/02.jpg'
import img3 from '../assets/images/03.jpg'
import img4 from '../assets/images/04.jpg'
import img5 from '../assets/images/05.jpg'
import img6 from '../assets/images/06.jpg'
import Modal from "../components/Modal/Modal"
import s from '../style/Home.module.scss'
import { Helmet } from "react-helmet";



export const Home =()=>{
    const {data, isLoading, error} = useQuery(
        {queryKey:['allFilms'], 
         queryFn:async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', 
        allFilms) })
       console.log(data)
   
    const [isModal, setIsModal] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);

       if(isLoading){
        return <div>Loading...</div>
       }

       if(error){
        return <div>Error:{error.message}</div>
       }

       const openModal = (film) => {
        setSelectedFilm(film);
        setIsModal(true);
      };

      const filmImages =[
        {
           id:1,
           src:img1,
           alt:"img1"
       },
        {
           id:2,
           src:img2,
           alt:"img2"
       },
        {
           id:3,
           src:img3,
           alt:"img3"
       },
        {
           id:4,
           src:img4,
           alt:"img4"
       },
        {
           id:5,
           src:img5,
           alt:"img5"
       },
        {
           id:6,
           src:img6,
           alt:"img6"
       }
    ]
    // Function to get the image corresponding to the index of the film
    const getFilmImage = (index) => {
    return filmImages[index % filmImages.length]; // This ensures the image matches the film index
};
    return(
     <div>
<Helmet>
        <title>Home</title>
        <meta name="description" content="Discover the Star Wars origin." />
        <meta name="keywords" content="Star wars, movies, characters, episodes " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content=" Star Wars" />
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

        <h1 className={s.h1Style} style={{textShadow:'2px 2px 6px darkviolet'}}>STAR &nbsp; WARS  &nbsp; MOVIES:</h1>
        
            <ul className={s.filmList}>
            {data.allFilms.films.map((film, index) => {
                const filmImage = getFilmImage(index);
                return (
                    <li key={film.id} className={s.filmItem}>
                     
                        <img
                            className={s.imageStyle}
                            src={filmImage.src}
                            alt={film.title}
                            style={{ width: '340px', height: '400px'  }}
                            //Open the modal
                            onClick={() => openModal(film)}
                        />
                        <p className={s.titleStyle} 
                        onClick={() => openModal(film)} style={{ cursor: 'pointer' }}>
                        {film.title}</p>
                    </li>
                );
            })}
        </ul>


        {selectedFilm && (
            <Modal isOpen={isModal} onClose={() => setIsModal(false)} film={selectedFilm} />
        )}
        </div>
    )
}