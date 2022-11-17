import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './about.css'



export default function About() {

  return (
    <div className="about">
        <Header />
        <div className="mainContent">
          <div className="contentLeft">
            <h1>What is Burd's Brown Egg?</h1>
            <p>A classic twist on an egg toss, Burd's Brown egg aims to combine camaraderie, hand-eye coordination, and an exciting indoor environment. The goal is to toss the egg across the house, starting and ending at the farthest possible points. There are some <a href="/rules">rules</a>, but the spirit of the game is simply to toss the egg around the house.</p>

            <p>The image shows a simplified diagram of a Burd's Brown Egg game. The egg starts in the kitchen, is tossed to the dining room, living room, bedroom, and then to the head of the basement stairs. From there the egg would continue down the steps and into any other rooms. The dotted lines represent the room boundaries. Players can step over these lines but must have at least one foot inside the room when catching or throwing the egg. The question mark represents a foyer. Players would have to decide if this constitutes a "room" and needs to be included in the toss sequence.</p>

            <p>There are plenty of alternate versions and rules that can be included. Some games dictate that all players must have a drink in one hand, making the toss a one-handed venture only. Some players will elect to use a trick shot for their toss (i.e. behind the back, through the legs, etc.). No matter the variation, a win is defined by a flawless game where no eggs are broken.</p>
          </div>
          <div className="contentRight">
            <img src="/burdsbrownegg.png" alt="example diagram of a game of Burd's Brown Egg" />
          </div>
        </div>
        <Footer />
    </div>
  )
}
