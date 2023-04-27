import React from 'react';
import './tools.styles.scss';
import Tool from '../../components/tool/tool.component';

const ToolsPage = () => {
  const tools: string[] = [
    'JavaScript',
    'ReactJs',
    'Redux',
    'SASS',
    'Tailwind-CSS',
    'Jest',
    'TypeScript',
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
  ];

  return (
    <section className='tools fade-in'>
      {tools.map((tool) => (
        <Tool tool={tool} />
      ))}
    </section>
  );
};

export default ToolsPage;
