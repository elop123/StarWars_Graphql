import { useQuery } from "@tanstack/react-query";
import {request} from "graphql-request";
import React from "react";
import { useParams } from "react-router-dom";
import { allCharacters } from "../queries/allCharacters";
import { Link } from "react-router-dom";


export const Character = () => {
  //const { peopleID } = useParams(); 
  const { data, isLoading, error } = useQuery({
    queryKey: ['allCharacters'], 
    queryFn: async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', 
      allCharacters),
  });

  console.log("Data:", data);

  
  //const people = data?.allPeople?.people || [];

  if (isLoading){
    return <p>Loading...</p>;
  } 

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {people.length > 0 ? (
        data.allPeople.people.map((person) => (
          <li key={person.id}>
            <p>Name: {person.name}</p>
            <p>Birth Year: {person.birthYear}</p>
            <p>Eye Color: {person.eyeColor}</p>
            <p>Gender: {person.gender}</p>
            <p>Hair Color: {person.hairColor}</p>
            <p>Height: {person.height}</p>
          </li>
        ))
      ) : (
        <p>No people available.</p>
      )}
    </>
  );
};
