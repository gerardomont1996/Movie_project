
import React,{useEffect,useState} from "react";

const search_api="https://api.themoviedb.org/3/search/movie?api_key=7d12b72621ac9b497306428405cfb59d&language=en-US&page=1&include_adult=false";
function App(){
    const [search,setSearch] = useState(" ");
  useEffect(()=>{
    fetch(search_api+search) 
    .then((res)=>res.json())
      .then((data) =>{ 
        setSearch(data.results);
    });
  });

  const onSubmit=(e)=>{
      e.preventDefault();
  };
 
    return (
    
           
            <div className="movie_container">
            <h1 className="title" >Movie Search </h1>
            <form onSubmit={onSubmit}>
            <input
                className="search"
                type="search"
                placeholder="Search"
                value={search} o
                onChange={(e)=>setSearch(e.target.value)}>
             </input>
            </form>
    
    </div>
    )
}
export default App;
