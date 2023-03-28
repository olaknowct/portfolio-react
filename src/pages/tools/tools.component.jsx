import React from 'react';
import './tools.styles.scss';
import { ReactSVG } from 'react-svg';

class ToolsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      tools: [
        'JavaScript',
        'ReactJs',
        'Redux',
        'SASS',
        'Jest',
        'jQuery',
        'NodeJs',
        'ExpressJs',
        'Git',
        'PHP',
        'Laravel',
        'codeIgniter',
        'MySql',
        'phpMyAdmin',
        'BootStrap',
        'Gitlab',
        'Github',
        'Heroku',
        'HTML',
        'CSS',
        'Firebase',
        'AWS',
        'MongoDB',
        'GoDaddy',
        'Cpanel',
        'Postman',
        'Netlify',
        'LiquidWeb',
        'VsCode',
      ],
    };
  }
  render() {
    const tools = this.state.tools;

    return (
      <div className='tools fade-in'>
        {tools.map((tool) => (
          <div class='tool'>
            <ReactSVG src={`img/tools/svgs/${tool.toLocaleLowerCase()}.svg`} />
            <span>{tool}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default ToolsPage;
