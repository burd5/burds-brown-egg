import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './header.css'
import './footer.css'
import './about.css'

export default function About() {
  return (
    <div className="about">
        <Header />
            <h1>What is Burd's Brown Egg?</h1>
            <p>A classic twist on an egg toss, Burd's Brown egg aims to combine</p>
        <Footer />
    </div>
  )
}
