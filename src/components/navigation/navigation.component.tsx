import React, { useEffect } from 'react';
import './navigation.styles.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  useEffect(() => {
    const sectionClass = window.document.querySelector('.navigations');
    const handleHover = function (e: Event, opacity: string) {
      if ((e.target as HTMLElement)?.classList.contains('navigation')) {
        const link = e.target as HTMLElement;
        const siblings = (link as HTMLElement)
          ?.closest('.navigations')
          ?.querySelectorAll('.navigation');

        siblings?.forEach((el) => {
          if (el !== link) (el as HTMLElement).style.opacity = opacity;
        });
      }
    };

    sectionClass?.addEventListener('mouseover', (e) => {
      handleHover(e, '0.5');
    });
    sectionClass?.addEventListener('mouseout', (e) => {
      handleHover(e, '1');
    });

    return () => {
      sectionClass?.addEventListener('mouseover', (e) => {
        handleHover(e, '0.5');
      });
      sectionClass?.addEventListener('mouseout', (e) => {
        handleHover(e, '1');
      });
    };

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
