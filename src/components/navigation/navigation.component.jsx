import React, { useEffect } from 'react';
import './navigation.styles.scss';
import { Link } from 'react-router-dom';

const Section = () => {
  useEffect(() => {
    const sectionClass = window.document.querySelector('.sections');
    const handleHover = function (e) {
      if (e.target.classList.contains('section')) {
        const link = e.target;
        const siblings = link.closest('.sections').querySelectorAll('.section');

        siblings.forEach((el) => {
          if (el !== link) el.style.opacity = this;
        });
      }
    };

    sectionClass.addEventListener('mouseover', handleHover.bind(0.2));
    sectionClass.addEventListener('mouseout', handleHover.bind(0.5));

    // window.addEventListener("keydown", (event) => {
    //     console.log("tada");
    // });
  });
  return (
    <div className='sections'>
      <Link className='section' to='/portfolio'>
        Works
      </Link>
      <Link className='section' to='/about'>
        IAM
      </Link>
      <Link className='section' to='/tools'>
        ToolBox
      </Link>
      <Link className='section' to='/certificate'>
        Earned !Given
      </Link>
    </div>
  );
};

export default Section;
