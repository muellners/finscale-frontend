import React from 'react';
import './usecase.scss';
import sm from '../../img/sm-bg.jpeg';

export default function Usecase() {
  return (
    <div className="case">
      <div className="case__header">
        <h2 className="header__secondary">CLosed Loop Payments</h2>
      </div>

      <div className="case__about">

      </div>

      <div className="case__how">
          <div className="case__header-box">
            <h2 className="heading-secondary">
              About Smart Contracts
            </h2>
          </div>
          <div className="case__text-box">
            <h3 className="heading-tertiary">About</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis placeat quibusdam deleniti esse minus omnis amet quas,
              nostrum nam possimus.
            </p>
          </div>
          <div className="case__text-box">
            <h3 className="heading-tertiary">Problem Scope</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis placeat quibusdam deleniti esse minus omnis amet quas,
              nostrum nam possimus.
            </p>
          </div>
          <div className="case__text-box">
            <h3 className="heading-tertiary">Solution</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis placeat quibusdam deleniti esse minus omnis amet quas,
              nostrum nam possimus.
            </p>
          </div>
      </div>

      <div className="case__body">

        <div className="case__header-box">
          <h2 className="heading-secondary">
            Usecases
          </h2>
        </div>

        <div className="case__body-main">
          <div className="">
            <img src={sm} alt="smart contracts" className="case__image" />
          </div>

          <div className="case__text">
            <div className="case__text-box">
              <h3 className="heading-tertiary">Smart Contracts</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis placeat quibusdam deleniti esse minus omnis amet quas,
                nostrum nam possimus.
            </p>
            </div>
            <div className="case__text-box">
              <h3 className="heading-tertiary">Smart Contracts</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis placeat quibusdam deleniti esse minus omnis amet quas,
                nostrum nam possimus.
            </p>
            </div>
            <div className="case__text-box">
              <h3 className="heading-tertiary">Smart Contracts</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis placeat quibusdam deleniti esse minus omnis amet quas,
                nostrum nam possimus.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
