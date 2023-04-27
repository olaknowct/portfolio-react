import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CertificatePage from '../../pages/certificate/certificate.component';
import AboutPage from '../../pages/about/about.component';
import PortfolioPage from '../../pages/portfolio/portfolio.component';
import ToolsPage from '../../pages/tools/tools.component';

const Main = (): JSX.Element => {
  return (
    <main className='container'>
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/tools' element={<ToolsPage />} />
        <Route path='/certificate' element={<CertificatePage />} />
      </Routes>
    </main>
  );
};

export default Main;
