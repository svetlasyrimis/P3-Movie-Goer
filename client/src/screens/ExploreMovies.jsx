import React from 'react'
// import Layout from '../components/shared/Layout'
// import '../styles/explore.css'
import Movie from './Movie'


const ExploreMovies = ({ movieData }) => {

  const movies = movieData.map((movie, index) => {
    return (
      <Movie movie={movie} key={index} />
    )
  })

  return (
    <>
      {/* <Layout> */}
      <h1>Explore Movies</h1>
      {movies}
      {/* </Layout> */}
    </>
  )
}

export default ExploreMovies