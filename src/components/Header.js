import React from 'react'
import './header.css'
import {NavLink} from "react-router-dom"

export default function Header() {

    let activeStyle = {
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'rgb(252, 221, 185)',
        borderRadius: '10px',
        border: '1px solid rgb(252,221,185)'
    }

    let notActive = {
        textDecoration: 'none',
        color: 'black',
    }

  return (
    <div className="header">
    <nav className="nav">
      <a href="/" style={{textDecoration: 'none', color: 'black'}}>
      <div className="logo">
        <img src="https://media.istockphoto.com/id/177444800/photo/plain-brown-egg-standing-on-white-surface.jpg?s=612x612&w=0&k=20&c=JqJ1Hq-rb9k80B8t_q6O_GZfO-5gO81ZLmtoZeGPyBw=" alt="brown egg" />
        <h1>Burd's Brown Egg</h1>
      </div>
      </a>
        <ul className="headerList">
          <NavLink to={'/'} style={({ isActive }) =>
              isActive ? activeStyle : notActive
            }>
          <li>Home</li>
          </NavLink>
          <NavLink to={'/about'} style={({ isActive }) =>
              isActive ? activeStyle : notActive
            }>
          <li id="about">About</li>
          </NavLink>
          <NavLink to={'/rules'} style={({ isActive }) =>
              isActive ? activeStyle : notActive
            }>
          <li>Rules</li>
          </NavLink>
          <NavLink to={'/contact'} style={({ isActive }) =>
              isActive ? activeStyle : notActive
            }>
          <li>Contact</li>
          </NavLink>
        </ul>
    </nav>
    </div>
  )
}

