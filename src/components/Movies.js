import React from "react";
import { movies } from "../data";

function Movies() {

  /*
  1.Apply .map to pass each object to a fucntion.
  2. 
  
  */
   const moviesList = movies.map((element) => {
     return (
       <div key={element.title}>
         <h3>{element.title}</h3>
         <h4>{element.time}</h4>
         <ul>
           {element.genres.map(genre => <li key={genre}>{genre}</li>)}
         </ul>
       </div>
     )
   })

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  )
}

export default Movies;
