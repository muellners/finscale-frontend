import React from 'react';
import './card.scss';
import sm from '../../img/smart-contracts.jpeg';

export default function Card({right}) {
  return (
    <div className="card">

      {
        right ? (
          <>
            <div className="card__image-box">
              <img src={sm} alt="smart contracts" className="card__image" />
            </div>

            <div className="card__text-box">
              <h3 className="heading-tertiary">Smart Contracts</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis placeat quibusdam deleniti esse minus omnis amet quas,
                nostrum nam possimus.
              </p>

              <a href="#" className="btn-text">Learn more &rarr;</a>

            </div>
          </>
        ) : (
            <>
              <div className="card__text-box">
                <h3 className="heading-tertiary">Smart Contracts</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis placeat quibusdam deleniti esse minus omnis amet quas,
                  nostrum nam possimus.
                </p>

                <a href="#" className="btn-text">Learn more &rarr;</a>

              </div>

              <div className="card__image-box">
                <img src={sm} alt="smart contracts" className="card__image" />
              </div>
            </>
        )
      }
      
    </div>
  )
}
