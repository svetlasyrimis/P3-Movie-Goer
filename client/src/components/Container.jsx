import React, { Component } from 'react'
import { getItems } from '../services/items'
import Routes from '../routes'
import Landing from '../screens/Landing'
import Home from '../screens/Home'
import Header from '../screens/Header'
import Footer from './shared/Footer'
import '../styles/Container.css'


export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      items: []
    }
  }

  async componentDidMount() {
    try {
      const items = await getItems()
      this.setState({ items })
    } catch (err) {
      console.error(err)
    }
  }

  // addMovie=async()=>{
  //   const response = await getMovie(this.state.search, this.state.currentUser.id)
  // }

  addItem = item => this.setState({ items: [...this.state.items, item] })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { user, items } = this.state


    const display = user ? Home : Landing
    return (
      <>
        <Header user={user} />
        {display}
    return (
      <>
        <main className="container">
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            clearUser={this.clearUser}
          />
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
