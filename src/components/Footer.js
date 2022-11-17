import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <ul className="footerList">
            <li><a href="https://www.linkedin.com/in/austin-burdette/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/burd5" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a></li>
            <li><a href="https://austinburdette.vercel.app/" rel="noreferrer" target="_blank"><i className="fas fa-folder"></i></a></li>
        </ul>
        <span>©2022 Austin Burdette Collective. All rights reserved.</span>
    </div>
  )
}
