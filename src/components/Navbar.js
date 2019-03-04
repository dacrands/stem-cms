import React, { Component } from 'react'
import Link from "gatsby-link"


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
      </nav>     
    )
  }
}

export default Navbar