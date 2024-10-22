import { useQuery } from "@tanstack/react-query";
import {request} from "graphql-request";
import React from "react";
import { useParams } from "react-router-dom";
import { allCharacters } from "../queries/allCharacters";
import { Link } from "react-router-dom";
import s from '../style/Character.module.scss'
import { Helmet } from "react-helmet"


export const Character = () => {
  const { peopleID } = useParams(); 
  const { data, isLoading, error } = useQuery({
    queryKey: ['allPeople'], 
    queryFn: async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', 
      allCharacters),
  });

  console.log("Data:", data);

  


  if (isLoading){
    return <p>Loading...</p>;
  } 

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className={s.sectionStyle}>
      <head>
      <Helmet>
        <title>Characters</title>
        <meta name="description" content="Discover the Star Wars characters: name, height" />
        <meta name="keywords" content="Star wars, characters, description " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content=" Ultimate Star Wars Character Guide" />
        <meta property="og:description" content="Learn more about Star Wars and characters" />
        <meta property="og:image" content="https://starwars.com/01.jpg" />
        <meta property="og:url" content="https://starwars.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      </head>
      <h1 className={s.titleStyle}>All Characters from Star Wars:</h1>
      <div className={s.cardContainer}>
      {data.allPeople.people.length > 0 ? (
        data.allPeople.people.map((person) => (
          <section className={s.infoStyle}>
          <ul>
          <li key={person.id} style={{listStyleType:'none'}}>
          <input type="checkbox" id={`accordion-${person.id}`} className={s.accordionToggle} />
          <label htmlFor={`accordion-${person.id}`} className={s.accordionLabel}>
            <p style={{width:'300px'}}><strong>Name:</strong> {person.name} <span>+</span> </p>
          </label>
          <div className={s.accordionContent}>
            <p><strong>Birth Year:</strong> {person.birthYear}</p>
            <p><strong>Eye Color:</strong> {person.eyeColor}</p>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Hair Color:</strong> {person.hairColor}</p>
            <p><strong>Height:</strong> {person.height}</p>
          </div>
          </li>
          </ul>
          </section>
        ))
      ) : (
        <p>No people available.</p>
      )}
    </div>
    </section>
  );
};
