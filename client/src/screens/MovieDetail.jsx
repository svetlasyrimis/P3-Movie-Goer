import React from 'react'
import { Link } from 'react-router-dom'
// import Movie from './Movie'

const MovieDetail = (props) => {
  const { movieData, index } = props

  const movie = movieData.find(movie => movie.id == props.match.params.id)

  console.log(movie)
  const pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    
    <div className="Movie" key={index}>
      
      <img src={pic} alt={"movie poster"} />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>

      <Link to="/create">
        <button>Add to My Movie List</button>
      </Link>

      <Link to="/">
        <button> Go Back to Explore</button>
      </Link>
    </div>
  )
}

export default MovieDetail