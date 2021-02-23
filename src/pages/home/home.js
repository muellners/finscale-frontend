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
          <a href="https://muellners-1.gitbook.io/finscale/" className="btn btn-white">Learn more</a>
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
            An innovative open source financial services platform that is continuous to change for any developer to serve the needs of their use case instantly while supporting thousands of transactions.
                        </p>

            <h3 className="heading-tertiary">How does it work</h3>
            <p className="paragraph">
            Any FI could simply use our service to work and start using this as a base platform, quickly and rapidly create thier own services by using our generators to create a micro-service that can join and leave the service.
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
          <Card
          right
          heading="Closed Loop Payments using Finscale Wallet"
          content="Let's take hospital as an eco-system which consists of several individual units like Pharmacy, Cafetaria etc. which can use different payment methods with 'finscale wallet' in a closed environment.
                   Example : A transaction is taking place between A & B over Finscale ledger layer with integrated external CBS for which A is a KYC customer and say B is Hospital's Pharmacy."
          href="https://wallet.finscale.net/"
          />
          {/*<Card />*/}
          <Card right
          href="https://muellners-1.gitbook.io/finscale/" />
        </div>
      </section>
    </div>
  )
}
