import React from 'react';
import Logo from '../../assets/images/ninja.png';
import './header.css';

export const Header = () => {
  return (
    <header>
      <section className='header-container'>
        <h1 className='title'>Device Manager</h1>
        <img className='ninja-logo' src={Logo} alt='Ninja one logo'/>
      </section>
      <hr className='separator'/>
    </header>
  )
}
