import React from 'react'
import Layout from '../components/shared/Layout'
import { Link } from 'react-router-dom'
import Header from './Header'


const Home = ({ user }) => (
  <Layout>
    <h1>this is home</h1>
    {/* <h4>The one place to keep track of all of your movies!</h4>
    {user ? authenticatedOptions : unauthenticatedOptions} */}
  </Layout>
)

export default Home