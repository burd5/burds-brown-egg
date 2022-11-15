import React from 'react'
import './header.css'
import {Link} from "react-router-dom"

export default function Header() {

    const handleClick = event => {
        event.currentTarget.classList.toggle('active')
    };

  return (
    <>
    <nav className="nav">
      <div className="logo">
        <img src="https://media.istockphoto.com/id/177444800/photo/plain-brown-egg-standing-on-white-surface.jpg?s=612x612&w=0&k=20&c=JqJ1Hq-rb9k80B8t_q6O_GZfO-5gO81ZLmtoZeGPyBw=" alt="brown egg" />
        <h1>Burd's Brown Egg</h1>
      </div>
        <ul className="headerList">
          <Link to={'/'} style={{ textDecoration: 'none' , color: 'black'}}>
          <li onClick={handleClick}>Home</li>
          </Link>
          <Link to={'/about'} style={{ textDecoration: 'none' , color: 'black'}}>
          <li onClick={handleClick}>About</li>
          </Link>
          <Link to={'/rules'} style={{ textDecoration: 'none' , color: 'black'}}>
          <li onClick={handleClick}>Rules</li>
          </Link>
          <Link to={'/contact'} style={{ textDecoration: 'none' , color: 'black'}}>
          <li onClick={handleClick}>Contact</li>
          </Link>
        </ul>
    </nav>
    </>
  )
}

