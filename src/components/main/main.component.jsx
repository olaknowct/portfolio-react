import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CertificatePage from '../../pages/certificate/certificate.component';
import AboutPage from '../../pages/about/about.component';
import PortfolioPage from '../../pages/portfolio/portfolio.component';
import ToolsPage from '../../pages/tools/tools.component';

const Main = () => {
  return (
    <main className='container'>
      <Routes>
        <Route exact path='/' element={<AboutPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/portfolio' element={<PortfolioPage />} />
        <Route exact path='/tools' element={<ToolsPage />} />
        <Route exact path='/certificate' element={<CertificatePage />} />
      </Routes>
    </main>
  );
};

export default Main;
