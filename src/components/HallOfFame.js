import React from 'react'
import './halloffame.css'
import Header from './Header'
import Footer from './Footer'

export default function HallOfFame() {
  return (
    <div className="halloffame">
        <Header />
        <h1>Hall Of Fame</h1>
        <div className="nominees">
            <div>
                <img src="https://media.istockphoto.com/vectors/golden-egg-on-royalty-free-vector-background-with-glow-effect-vector-id123406431?b=1&k=20&m=123406431&s=170667a&w=0&h=xU4io6S4dvEmqt_xbcKKZOcKK5-6JLOlHn9LwzwK0JE=" alt="golden egg" />
                <h2>Austin Burdette</h2>
                <span><strong>Class of 2022</strong></span>
            </div>
            <div>
                <img src="https://media.istockphoto.com/vectors/golden-egg-on-royalty-free-vector-background-with-glow-effect-vector-id123406431?b=1&k=20&m=123406431&s=170667a&w=0&h=xU4io6S4dvEmqt_xbcKKZOcKK5-6JLOlHn9LwzwK0JE=" alt="golden egg" />
                <h2>Nomination Pending</h2>
                <span><strong>Class of 2023</strong></span>
            </div>
            <div>
                <img src="https://media.istockphoto.com/vectors/golden-egg-on-royalty-free-vector-background-with-glow-effect-vector-id123406431?b=1&k=20&m=123406431&s=170667a&w=0&h=xU4io6S4dvEmqt_xbcKKZOcKK5-6JLOlHn9LwzwK0JE=" alt="golden egg" />
                <h2>Nomination Pending</h2>
                <span><strong>Class of 2024</strong></span>
            </div>
        </div>
        <Footer />
    </div>
  )
}
