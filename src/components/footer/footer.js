import React from 'react'
import './footer.scss'

export default function Footer() {
  return (

    <section className="footer">
      <div className="footer__top">
        <ul className="footer__top--about">
          <li className="footer__top--headers">About</li>
          <li>Finscale</li>
          <li>Contact</li>
        </ul>
        <ul className="footer__top--usecases">
          <li className="footer__top--headers">Use Cases</li>
          <li>Smart Contracts</li>
          <li>Smart Contracts</li>
          <li>Smart Contracts</li>
        </ul>
        <ul className="footer__top--dev">
          <li className="footer__top--headers">Developer</li>
          <li>Api</li>
          <li>Documentation</li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom--text">
          By using this website, you agree to our use of cookies,
          and you acknowledge that you have read and understood our
            <a href="#" target="_blank" rel="noopener noreferrer">Privacy</a>
            and <a href="#" target="_blank" rel="noopener noreferrer">Terms of Use</a>
        </p>
      </div>
    </section>
  )
}
