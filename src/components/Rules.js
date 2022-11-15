import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './header.css'
import './footer.css'
import './rules.css'

export default function Rules() {
  return (
    <div className="pageContainer">
        <Header />
        <div className="listRulesCon">
            <h1>Rules</h1>
            <div className="listRules">
              <ol>
                <li>The egg used <strong>MUST</strong> be brown.</li>
                <li>Everyone in the house or apartment has to participate.</li>
                <li>The egg must "visit" every room in the house or apartment. This includes bedrooms, bathrooms, and other major rooms but excludes closets, pantries, and utility rooms.</li>
                <li>If there are more rooms than people, then players are allowed to move to a different room after successfully completing the toss from their start position.</li>
                <li>If there are more people than rooms: <strong>Option 1 -</strong> Players must complete a traversal, sending the egg from the start to the end and then back to the start again.</li>
                <li>If there are more people than rooms: <strong>Option 2 -</strong> Two players can occupy one room. Players must use the biggest rooms first and stand as far apart as possible.</li>
                <li>All participants are allowed one pivot foot so players can lean out of rooms, around corners, and up/down steps.</li>
                <li>If the egg breaks (i.e. any liquid breaks the surface of the egg), players must start again from the beginning.</li>
                <li>Players can not use anything but their hands to catch the egg</li>
                <li>If an egg is dropped but does not break, play continues.</li>
              </ol>
            </div>
          </div>
        <Footer />
    </div>
  )
}

