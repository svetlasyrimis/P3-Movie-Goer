import React from 'react'
import Layout from '../components/shared/Layout'
// import { Link } from 'react-router-dom'
// import Header from './Header'
import '../styles/explore.css'
import search from '../components/shared/constants'
import axios from "axios"


// const pic = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg'


const Home = ({ user }) => (
  <Layout>
    <h1>Explore Your Favorite Movies</h1>
    <div className='movie-block'>
      {fetchInfo}
      {/* <img src={pic} />
      <div className='movie-text'>
      <h3>Forrest Gump</h3>
      <p>1994</p>
      <p>A very nice movie indeed.</p>
      </div> */}
      
    </div>

  </Layout>
)

const fetchInfo = async () => {
  try {
    const response = await axios.get(search)
    console.log(response.data.results)

  }
  catch (error) {
    console.log(error)
  }
}

fetchInfo()

export default Home