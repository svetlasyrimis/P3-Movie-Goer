import React, { Component } from 'react'
import axios from 'axios'
const API_KEY = '981f1b61aa5e31abce190e535142d7e9'
const input = "batman begins"
const explore = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`

class Home extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(explore)
      console.log(response)
      this.setState({
        movies: response.data
      })
    }
    catch (error) {
      alert("error")
    }
  }
  render() {
    console.log(this.state.movies)


    let flicks = this.state.movies.length !== 0 && this.state.movies.results.map((result, index) => {

      console.log(this.state.movies.results)
      return (
        <div key={index}>
          {/* need to figure out a way to add the correct "intro" portion to the img call, so for now I wouldnt worry about actually getting the image */}
          <img src={result.backdrop_path} />
          <h2>{result.title}</h2>
          <p>{result.overview}</p>
          <button onClick>Favorite</button>
        </div>
      )
    })
    return (
      <>
        <h1>flicks</h1>
        {flicks}
      </>
    )
  }
}
export default Home;