import React, { Component } from 'react'

const  movie_background = new URL("/img/movie_background.jpg",import.meta.url)
function App() {
  
    return <>
       <div className='movie-background'>
         <h1> Welcome  TO  MovieMania </h1>
         <img src={movie_background}/>
       </div>
       </>
    
}
export default App;
