import { useState, useEffect } from "react"


function Sortering (){
    const [data, setData]= useState([])
    const[sortType, setSortType]= useState('default')

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sortData();
  }, [sortType]);

    
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://swapi-graphql.netlify.app/.netlify/functions/index"
      );
      const result = await response.json();
      setData(result.data.allFilms.films); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const sortData = () => {
    const sortedData = [...data]; 

    if (sortType === "title") {
      // Sort by title
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "releaseDate") {
      // Sort by release date 
      sortedData.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    }
    
    setData(sortedData); 
  };

  return (
    <div>
      
      <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
        <option value="default">Default</option>
        <option value="title">Sort by Title</option>
        <option value="releaseDate">Sort by Release Date</option>
      </select>

      <ul>
        {data.map((film) => (
          <li key={film.id}>
            <strong>{film.title}</strong> - {film.releaseDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sortering