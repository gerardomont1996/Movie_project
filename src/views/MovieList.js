
import React,{useEffect,useState} from "react";
import Movie from "../components/Movie";


const movie_api= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d12b72621ac9b497306428405cfb59d";
function App(){
    const [movies, setMovies]= useState([]);
  useEffect(()=>{
    fetch(movie_api) 
    .then((res)=>res.json())
      .then((data) =>{ 
        console.log(data);
        setMovies(data.results);
    });
  },[])
  

    return (
      <>
     
    <div className="container">
          {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
    
    </>
    )
}
  



export default App;