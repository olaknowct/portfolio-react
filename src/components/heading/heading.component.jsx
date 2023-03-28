import React, { useEffect } from 'react';
import './heading.styles.scss';
import Typed from 'typed.js';

const Heading = () => {
  const heading = React.useRef(null);
  const subHeading = React.useRef(null);

  useEffect(() => {
    const typedHeading = new Typed(heading.current, {
      strings: ['CHRISTOPHER OLANO'],
      typeSpeed: 10,
      showCursor: false,
    });

    const typedSubHeading = new Typed(subHeading.current, {
      strings: [
        'Software Engineer',
        'Full Stack Developer',
        'Product Specialist',
        'RF Engineer',
        'Electronics Engineer',
        'Eletronics Technician',
      ],

      typeSpeed: 70,
      backSpeed: 50,
      showCursor: false,
      loop: true,
    });

    return () => {
      typedHeading.destroy();
      typedSubHeading.destroy();
    };
  });

  return (
    <div className='heading'>
      <span className='heading-typed' ref={heading} />
      <span className='heading-typed sub' ref={subHeading} />
    </div>
  );
};
export default Heading;
