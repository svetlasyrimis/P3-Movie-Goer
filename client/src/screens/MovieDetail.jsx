import React from 'react'
const pic = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg'

const MovieDetail = (props) => {
  const { movieData, index } = props

  const movie = movieData.find( movie => movie.id == props.match.params.id)

  return (
    <div className="Movie" key={index}>
          {/* need to figure out a way to add the correct "intro" portion to the img call, so for now I wouldnt worry about actually getting the image */}
          <img src={pic} />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
      <button>Favorite</button>
      <button>Go Back to Explore</button>
    </div>
  )
}

export default MovieDetail