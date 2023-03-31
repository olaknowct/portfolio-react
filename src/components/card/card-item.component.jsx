import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import './card-item.styles.scss';

const CardItem = ({ portfolio }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { imgUrl, name, shortDescription, gallery, demoVideo, urlProject, repo } = portfolio;

  const slides = gallery.map(({ path, description }) => {
    return {
      src: path,
      title: name,
      description,
    };
  });

  return (
    <div className='portfolio-card'>
      <div className='portfolio-card-front'>
        <img src={imgUrl} alt={name} />
      </div>

      <div className='portfolio-card-back'>
        <div className='portfolio-card-back__content'>
          <h1>{name}</h1>
          <span>
            {name} {shortDescription}
          </span>
          <div className='portfolio-card-back__actions'>
            {demoVideo.isAvailable ? (
              <a
                className='demovid'
                data-tip='watch demo via clipchamp'
                href={demoVideo.clipchamp}
                target='_blank'
                rel='noreferrer'
              >
                <img src='./img/demovid.png' alt='' />
              </a>
            ) : (
              ''
            )}

            <button type='button' onClick={() => setIsOpen(true)} data-tip='show gallery' href=''>
              <img src='./img/image-gallery.png' alt='' />
            </button>
            <a href={urlProject} target='_blank' data-tip='navigate to project' rel='noreferrer'>
              <img src='./img/link.png' alt='' />
            </a>

            {repo.isAvailable ? (
              <a data-tip='Repository Link' href={repo.github} target='_blank' rel='noreferrer'>
                <img src='./img/github.png' alt='' />
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      <ReactTooltip />
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
      />
    </div>
  );
};

export default CardItem;
