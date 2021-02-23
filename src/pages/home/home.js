import React from 'react';
import './home.scss'
import bg from '../../img/hero-bg.mp4';
import gb from '../../img/global.jpg';
import FinscaleLogo from '../../img/finscale-logo.png';
import Card from '../../components/cards/card';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="header__logo-box">
          <img src={FinscaleLogo} alt="Finscale Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Finscale</span>
            <span className="heading-primary-sub">Is where the magic happens</span>
          </h1>
          <a href="#" className="btn btn-white">Learn more</a>
        </div>
      </header>

      <section className="about">
        <div className="about__heading-box">
          <h2 className="heading-secondary">
            About
          </h2>
        </div>

        <div className="about__main">
          <div className="about__text-box">
            <h3 className="heading-tertiary">What is Finscale</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus dolorem adipisci fuga. Nam expedita nobis minima, repudiandae exercitationem impedit consectetur alias.
                        </p>

            <h3 className="heading-tertiary">How does it work</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus dolorem adipisci fuga. Nam expedita nobis minima, repudiandae exercitationem impedit consectetur alias.
                        </p>
          </div>
          <div className="about__pictures-box">
            <img src={gb} alt="Natours Logo" className="about__photo about__photo--p1" />
            <img src={gb} alt="Natours Logo" className="about__photo about__photo--p2" />
            <img src={gb} alt="Natours Logo" className="about__photo about__photo--p3" />

          </div>
        </div>

      </section>


      <section className="usecase">
        <div className="usecase__heading-box">
          <h2 className="heading-secondary">
            Use cases
          </h2>
        </div>

        <div className="usecase__main">
          <Card right/>
          <Card />
          <Card right/>
        </div>
      </section>
    </div>
  )
}
