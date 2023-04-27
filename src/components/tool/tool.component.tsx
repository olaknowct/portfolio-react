import React from 'react';
import { ReactSVG } from 'react-svg';
import './tool.styles.scss';

const Tool = ({ tool }: { tool: string }) => {
  return (
    <div className='tool'>
      <div className='tool-svg__box'>
        <ReactSVG
          className='tool-svg__svg'
          src={`img/tools/svgs/${tool.toLocaleLowerCase()}.svg`}
        />
      </div>
      <span className='tool-name'>{tool}</span>
    </div>
  );
};

export default Tool;
