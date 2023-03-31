import React, { useEffect } from 'react';
import './navigation.styles.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  useEffect(() => {
    const sectionClass = window.document.querySelector('.navigations');
    const handleHover = function (e) {
      if (e.target.classList.contains('navigation')) {
        const link = e.target;
        const siblings = link.closest('.navigations').querySelectorAll('.navigation');

        siblings.forEach((el) => {
          if (el !== link) el.style.opacity = this;
        });
      }
    };

    sectionClass.addEventListener('mouseover', handleHover.bind(0.5));
    sectionClass.addEventListener('mouseout', handleHover.bind(1));

    // window.addEventListener("keydown", (event) => {
    //     console.log("tada");
    // });
  });
  return (
    <nav className='navigations margin-bottom-sm'>
      <Link className='navigation' to='/portfolio'>
        Works
      </Link>
      <Link className='navigation' to='/about'>
        IAM
      </Link>
      <Link className='navigation' to='/tools'>
        ToolBox
      </Link>
      <Link className='navigation' to='/certificate'>
        Earned !Given
      </Link>
    </nav>
  );
};

export default Navigation;
