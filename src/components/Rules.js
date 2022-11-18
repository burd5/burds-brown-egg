import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './rules.css'

export default function Rules() {
  return (
    <div className="pageContainer">
        <Header />
        <div className="listRulesCon">
            <div className="listRules">
              <ol>
                <li>The egg used <strong>MUST</strong> be brown.</li>
                <li>Everyone in the house or apartment has to participate.</li>
                <li>The egg must enter every room in the house or apartment, starting and ending at the farthest rooms or points from eachother. This includes bedrooms, bathrooms, and other major rooms but excludes closets, pantries, and utility rooms. Players can technically start from any point, but it makes the most sense to start upstairs or in the basement.</li>
                <li>If there are more rooms than people, then players are allowed to move to a different room after successfully completing the toss from their start position.</li>
                <li>If there are more people than rooms: <strong>Option 1 -</strong> Players must complete a traversal, sending the egg from the start to the end and then back to the start again.</li>
                <li>If there are more people than rooms: <strong>Option 2 -</strong> Two players can occupy one room. Players must use the biggest rooms first and stand as far apart as possible.</li>
                <li>All participants are allowed one pivot foot so players can lean out of rooms, around corners, and up/down steps.</li>
                <li>Players must be standing in a room. You cannot catch or toss an egg from a hallway or other unincorporated space.</li>
                <li>If the egg breaks (i.e. any liquid breaks the surface of the egg), players must start again from the beginning.</li>
                <li>Players can not use anything but their hands to catch the egg</li>
                <li>If an egg is dropped but does not break, play continues.</li>
                <li>Players win if no eggs are broken during the game.</li>
              </ol>
            </div>
          </div>
        <Footer />
    </div>
  )
}

