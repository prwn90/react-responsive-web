import React from 'react';
import { Button } from '../Button';
import './Pricing.css';
import { GoPackage } from 'react-icons/go';
import { GiGoldBar } from 'react-icons/gi';
import { GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>CHOOSE YOUR PLAN!</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GoPackage />
                </div>
                <h3>Silver</h3>
                <h4>$19.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Lorem Ipsum is simply </li>
                  <li>Lorem Ipsum is simply </li>
                  <li>Lorem Ipsum is simply </li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose This!
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiGoldBar />
                </div>
                <h3>Gold</h3>
                <h4>$29.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Lorem Ipsum is simply </li>
                  <li>Lorem Ipsum is simply </li>
                  <li>Lorem Ipsum is simply </li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                    Choose This!
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCutDiamond />
                </div>
                <h3>Diamond</h3>
                <h4>$59.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Lorem Ipsum is simply </li>
                  <li>Lorem Ipsum is simply </li>
                  <li>Lorem Ipsum is simply </li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                    Choose This!
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
