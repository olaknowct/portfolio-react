import React, { useEffect } from 'react';
import './about.styles.scss';
import Typed from 'typed.js';

const AboutPage = () => {
  const intro = React.useRef(null);

  useEffect(() => {
    const introTyped = new Typed(intro.current, {
      strings: [
        `Hey, Hi! You can call me Chris ... \n <p>An engineer who is passionate about <span class='about-me__dev'>DE</span>aling with complex problems involving technology.</p>\nI've become addicted learning new technology, this helps me understand what i'm capable of.\n<p>Now, I continously progressively in<span class='about-me_dev'>VE</span>sting in myself, knowing what to know, <span class='about-me_dev'>LO</span>ving what i do, doing what i think will help me grow over time and most importantly <span class='about-me_dev'>PER</span>severe despite of all obstacle.</p>\n<p>On the other hand, the other half loves sports and a fitness enthusiastic.</p>`,
      ],
      startDelay: 900,
      typeSpeed: 50,
      backSpeed: 50,
    });

    return () => {
      introTyped.destroy();
    };
  });

  return (
    <section className='about-me'>
      <figure className='about-me__img'>
        <img className='fade-in ' src='./img/chris.jpg' alt='' />
      </figure>
      <div className='about-me__description'>
        <span ref={intro} />
      </div>
    </section>
  );
};
export default AboutPage;
