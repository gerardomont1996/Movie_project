import React from 'react'
const img_api="https://image.tmdb.org/t/p/w1280";
const Movie=({title,poster_path,overview,vote_average}) =>(
    <div className='movie'>
        <img src={img_api+poster_path} alt={title}/>
        <div className='movie_info'>
            <h4>{title}</h4>
            <span>{vote_average}</span>

        </div>
    
    <div className="movie-over">
        <h1>trailer</h1>
        <p>{overview}</p>
    </div>

    </div>


  


);


export default Movie;
