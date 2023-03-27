import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/about/about.component';
import PortfolioPage from './pages/portfolio/portfolio.component';
import ToolsPage from './pages/tools/tools.component';
import CertificatePage from './pages/certificate/certificate.component';

import Header from './components/header/header.component';
import Heading from './components/heading/heading.component';
import Section from './components/section/section.component';

const App = () => {
  return (
    <>
      <Header />
      <Heading />
      <Section />
      <Routes>
        <Route exact path='/' element={<AboutPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/portfolio' element={<PortfolioPage />} />
        <Route exact path='/tools' element={<ToolsPage />} />
        <Route exact path='/certificate' element={<CertificatePage />} />
      </Routes>
    </>
  );
};
export default App;
