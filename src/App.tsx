import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import Main from './components/main/main.component';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Main />
    </>
  );
};
export default App;
