import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import './certificate.styles.scss';

const CertificatePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curImage, setCurImage] = useState('');
  const [title, setTitle] = useState('');

  const handleOpenModal = (e, { imgPath, cert: name }) => {
    // const hasHideEl = e.target.classList.contains('hide');
    const targeted = e.target.innerHTML;

    if (targeted === '🔎') {
      setIsOpen(true);
      setCurImage(imgPath);
      setTitle(name);
    }
  };

  const slides = [{ src: `./img/certificate/${curImage}`, height: 700, title }];

  const certificates = [
    {
      cert: 'The Complete Javascript Course 2023: From Zero to Expert!',
      imgPath: 'jsjonas.jpg',
      link: 'https://www.udemy.com/certificate/UC-5d636661-297b-4967-b38c-9be4f98412f8/',
    },
    {
      cert: 'Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)',
      imgPath: 'yihuareact.jpg',
      link: 'https://www.udemy.com/certificate/UC-78882aab-8b83-4ba2-a6a4-045813ace669/',
    },

    {
      cert: 'Crash Course: Build a Full-Stack Web App in a Weekend!',
      imgPath: 'fsjonas.jpg',
      link: 'https://www.udemy.com/certificate/UC-a957d1fb-aa6e-4f8f-89d6-97e2f668d75d/',
    },
    {
      cert: 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2023',
      imgPath: 'nodejonas.jpg',
      link: 'https://www.udemy.com/certificate/UC-9bf5ade7-17e5-4490-a1c0-afaf0f5b44ea/',
    },
    {
      cert: 'Build Responsive Real-World Websites with HTML and CSS',
      imgPath: 'html_css_jonas.jpg',
      link: 'https://www.udemy.com/certificate/UC-dee20bed-d51a-4675-9a38-ecfbb582fbeb/',
    },
    {
      cert: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
      imgPath: 'adv_css_jonas.jpg',
      link: 'https://www.udemy.com/certificate/UC-e6e39b0e-c6a1-413b-a65d-b71482fc699d/',
    },
  ];

  return (
    <>
      <div className='certificates fade-in'>
        {certificates.map((certificate) => (
          <div className='certificate'>
            <img src={`./img/certificate/${certificate.imgPath}`} alt={certificate.cert} />

            <div className='certificate-overlay hide'></div>
            <div onClick={(e) => handleOpenModal(e, certificate)} className='certificate-zoom hide'>
              <span>🔎</span>
              <a href={certificate.link} target='_blank' rel='noreferrer'>
                🔗
              </a>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        styles={{
          container: {
            backgroundColor: 'rgba(0, 0, 0, .3)',
            fontSize: '1.4rem',
            letterSpacing: '1.5px',
          },
        }}
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        plugins={[Captions]}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
        }}
      />
    </>
  );
};

export default CertificatePage;
