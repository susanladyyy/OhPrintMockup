import React, { Component } from 'react'
import Header from '../components/header/Header'
import './Home.css'

export class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
      </div>
    )
  }
}

export default Home
