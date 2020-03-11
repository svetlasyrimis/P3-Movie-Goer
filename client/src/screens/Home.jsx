import React from 'react'
import Layout from '../components/shared/Layout'
import search from '../components/shared/constants'
import axios from "axios"

const Home = () => (
    <Layout>
        <h4>Welcome to the items app!</h4>
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