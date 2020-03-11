import React, { Component } from 'react'
import axios from 'axios'

import { getItems } from '../services/items'
import Routes from '../routes'
import Landing from '../screens/Landing'
import Home from '../screens/Home'
import Header from '../screens/Header'
import Footer from './shared/Footer'
import '../styles/Container.css'

const API_KEY = '981f1b61aa5e31abce190e535142d7e9'
const input = "batman begins"
const explore = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`


export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      items: [],//this should be tied to "my movies from the backend"
      explorerMovies: []
    }
  }


  //below is existing code from what was given. Note "items"
  // async componentDidMount() {
  //   try {
  //     const items = await getItems()
  //     this.setState({ items })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  async componentDidMount() {
    try {
      const response = await axios.get(explore)
      console.log(response)
      this.setState({
        explorerMovies: response.data.results
      })
    }
    catch (error) {
      alert("error")
    }
  }

  // addMovie=async()=>{
  //   const response = await getMovie(this.state.search, this.state.currentUser.id)
  // }



  ///Review "add item" for shifting to "add movie to favorites"
  addItem = item => this.setState({ items: [...this.state.items, item] })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    console.log(this.state.movies)
    ////////////////////////////////////////////////
    let flicks = this.state.explorerMovies.length !== 0 && this.state.explorerMovies.map((movie, index) => {

      console.log(this.state.movies)
      return (
        <div key={index}>
          {/* need to figure out a way to add the correct "intro" portion to the img call, so for now I wouldnt worry about actually getting the image */}
          <img src={movie.backdrop_path} />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button onClick>Favorite</button>
        </div>
      )
    })
    ///////////////////////////////////////////////
    const { user, items } = this.state


    const display = user ? Home : Landing
    return (
      <>
        <Header user={user} />
        {display}
    return (
        <>
          <Header user={user} />
          <main className="container">
            <Routes
              items={items}
              user={user}
              setUser={this.setUser}
              addItem={this.addItem}
              clearUser={this.clearUser}
            />
            {/* //////////////////////////////////// */}
            <h1>flicks</h1>
            {flicks}
            {/* //////////////////////////////////////// */}
          </main>
          <Footer />
        </>
    )
  }
}
      </>
    )
  }
}
