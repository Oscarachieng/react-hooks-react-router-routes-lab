import React from "react";
import { directors } from "../data";

function Directors() {

  /*
    1. declare a function to render the directors and pass directors as argument.
    2. apply map on the directiors and return respective JSX element for each element propertis.
  */

  const renderDirectors = directors.map(element => {
       return (
         <div key={element.name}>
           <h4>{element.name}</h4>
           <ul>
             {element.movies.map(movie => <li key={movie}>{movie}</li>)}
           </ul>
         </div>
       )
     })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors;
