import React from 'react';
import Heading from './heading/heading.component';
import NavHeader from './nav-header/nav-header.component';

const Header = () => {
  return (
    <header className='header margin-top-sm margin-bottom-sm'>
      <NavHeader />
      <Heading />
    </header>
  );
};
export default Header;
