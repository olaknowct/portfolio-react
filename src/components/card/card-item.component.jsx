import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Lightbox from 'react-18-image-lightbox';

import 'react-18-image-lightbox/style.css';

import './card-item.styles.scss';

const CardItem = ({ portfolio }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { imgUrl, name, shortDescription, gallery, demoVideo, urlProject, repo } = portfolio;

  const curImage = gallery[index];
  const nextImage = gallery[(index + 1) % gallery.length];
  const prevImage = gallery[(index + gallery.length - 1) % gallery.length];
  return (
    <div className='card'>
      <div className='front'>
        <img src={imgUrl} alt={name} />
      </div>

      <div className='back'>
        <div className='back-content'>
          <h2>{name}</h2>
          <span>
            {name} {shortDescription}
          </span>
          <div className='sm'>
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
      {isOpen && (
        <Lightbox
          enableZoom={false}
          imageTitle={curImage.description}
          imagePadding={15}
          mainSrc={curImage.path}
          nextSrc={nextImage.path}
          prevSrc={prevImage.path}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setIndex((index + gallery.length - 1) % gallery.length)}
          onMoveNextRequest={() => setIndex((index + 1) % gallery.length)}
        />
      )}
    </div>
  );
};

export default CardItem;
