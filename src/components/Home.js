import React from 'react'
import './home.css'
import {Link} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="eggs">
      <Header />
      <div className="home">
        <Link to={'/about'} style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="homeSection">
            <h3 className="insideEgg">About</h3>
        </div>
        </Link>
        <Link to={'/games'} style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="homeSection">
            <h3 className="insideEgg">Games</h3>
        </div>
        </Link>
        <Link to={'/halloffame'} style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="homeSection">
            <h3 className="insideEgg">Hall of Fame</h3>
        </div>
        </Link>
        </div>
        <Footer />
    </div>
  )
}
