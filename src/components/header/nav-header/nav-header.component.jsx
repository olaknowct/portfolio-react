import React from 'react';
import './nav-header.styles.scss';
const NavHeader = () => {
  return (
    <nav className='header-nav'>
      <a href='#facebook'>
        <img className='nav-img fb' src='./img/facebook.png' alt='' />
      </a>
      <a href='https://github.com/olaknowct' target='_blank' rel='noreferrer'>
        <img className='nav-img github' src='./img/github.png' alt='' />
      </a>
      <a href='#twitter'>
        <img className='nav-img twtr' src='./img/twitter.png' alt='' />
      </a>
      <a href='#ig'>
        <img className='nav-img ig' src='./img/instagram.png' alt='' />
      </a>
      <a
        href='https://www.linkedin.com/in/christopher-olano-694440143/'
        target='_blank'
        rel='noreferrer'
      >
        <img className='nav-img lkn' src='./img/linkedin.png' alt='' />
      </a>
    </nav>
  );
};

export default NavHeader;
