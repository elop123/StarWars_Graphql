import { useQuery } from "@tanstack/react-query"
import request from "graphql-request"
import React from "react"
import { useParams } from "react-router-dom"
import { singleFilm } from "../queries/singlefilm"

export const Search =()=>{
    const {filmID} = useParams()
    console.log(filmID)

    const {data, isLoading, error} = useQuery(
        {queryKey:['singleFilm'], 
         queryFn:async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', 
            singleFilm, 
            {filmId: filmID}) })

            console.log("Data for single film",data)

            
            const film = data?.singleFilm?.films || []
    return(
       
        <>
        {film.length > 0 ? (
          film.map((item) => (
           
            <p >{item.producers}</p>
       
          ))
        ) : (
          <p>No films available.</p>
        )}
      </>
          
    )
}