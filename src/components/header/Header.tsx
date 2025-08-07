import React, { Component } from 'react'
import './Header.css'
import { FaSearch } from 'react-icons/fa'

export class Header extends Component {
  render() {
    return (
        <header className='header-container'>
            <div className='logo-right'>
                <img src="./logo.jpg" alt="logo" />
            </div>
            <ul className='menu-list'>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <div className="search-bar">
                <input type="text" name="" id="" placeholder='Search'/>
                <button className="search-button">
                    <FaSearch />
                </button>
            </div>
        </header>
    )
  }
}

export default Header
