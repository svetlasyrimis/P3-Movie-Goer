import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Explore</NavLink>
    <NavLink to='/my-movies'>My Movies</NavLink>
    <NavLink to='/items'>Items for reference</NavLink>
    <NavLink to='/create'>Create Item for reference</NavLink>
  </nav>
)

export default Nav