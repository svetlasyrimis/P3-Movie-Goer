import React, { Component } from 'react'
import {Link } from 'react-router-dom'

const pic = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg'


const Movie = (props) => {

  const { movie, index } = props

  return (
    <div className="Movie" key={index}>
          {/* need to figure out a way to add the correct "intro" portion to the img call, so for now I wouldnt worry about actually getting the image */}
          <img src={pic} />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
      <button>Favorite</button>
      <Link to={`movies/${movie.id}`}>
      <button> Show Detail</button>

      </Link>

      </div>

)

}

export default Movie