import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = actors.map(actor => {
      return (
        <div key={actor.name}>
           <h4>{actor.name}</h4>
           <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
        </div>
      )
    })
 
  return (
    <div>
       <h1>Actors Page</h1>
       {renderActors}
    </div>
  );
}

export default Actors;
