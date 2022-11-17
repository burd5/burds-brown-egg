import React from 'react'
import './games.css'
import Header from './Header'
import Footer from './Footer'


export default function Games() {
  return (
    <div className="games">
    <Header />
        <h1>Games</h1>
        <div className="gameHistory">
            <div className="gameInfo">
                <h3>Inaugural Game</h3>
                <p>It all started here. There is no better arena for Burd's Brown Egg than a large cabin in the woods. A couple drops, a lot of practice, and full buy in from all the participants was all that was needed to deliver this egg to the basement finish line.</p>
                <h4>Result: 1 for 3 (33%)</h4>
                <h4>Location: Deep Creek Lake, MD</h4>
                <iframe title="Inaugural Game" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98509.90825321726!2d-79.39142336609396!3d39.50467914173204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89caaa7f992c407b%3A0x536ce3091c13183f!2sDeep%20Creek%20Lake!5e0!3m2!1sen!2sus!4v1668536672428!5m2!1sen!2sus" width="400" height="250" style={{borderColor: 'black', borderRadius: 10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="gameInfo">
                <h3>Winter Classic 2020</h3>
                <p>A strong showing from the hosses led to a near perfect game. Jessie Schoonover cracked under the pressure but redeemed herself with the starting toss on attempt #2. The over the house egg toss was introduced for the first time.</p>
                <h4>Result: 1 for 2 (50%)</h4>
                <h4>Location: Walkersville, MD</h4>
                <iframe title="Winter Classic 2020" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612.2055639593262!2d-77.3789022750835!3d39.45160484398708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9daaa0f2045b5%3A0x68a54577eb643d4b!2s7815%20River%20Run%20Ct%2C%20Frederick%2C%20MD%2021701!5e0!3m2!1sen!2sus!4v1668536989046!5m2!1sen!2sus" width="400" height="250" style={{borderColor: 'black', borderRadius: 10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="gameInfo">
                <h3>Winter Classic 2023</h3>
                <p>The brown egg boys look to return to form after the COVID break</p>
                <h4>Result: Pending</h4>
                <h4>Location: Pending</h4>
                <iframe title="Winter Classic 2023" src="" width="400" height="250" style={{borderColor: 'black', borderRadius: 10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    <Footer />
    </div>
  )
}
