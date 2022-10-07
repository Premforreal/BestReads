import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import './Book/book.css';
import EmailIcon from '@mui/icons-material/Email';

function About() {
  return (<div className='About'>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab fugit voluptatem molestiae, est consequatur delectus, dolor vitae magnam tenetur reiciendis velit error enim nobis ut, rem totam molestias quasi! Dicta omnis aliquid facere id quis culpa dolorem sunt ut reprehenderit, inventore est! Veniam quas consequuntur iure commodi esse expedita.</p>
          <div className='Icons'>
          <a className='github' href="https://github.com/Premforreal" target='blank'><GitHubIcon /></a>
          <a className='portfolio' href="https://prem-react-portfolio.netlify.app/" target='blank'><TerminalIcon/></a>
          <a className='linkedin' href="https://www.linkedin.com/in/premforreal/" target='blank'><LinkedInIcon/></a>
          <a className='gmail' href="mailto:premalakuntah@gmail.com" target='blank'><EmailIcon/></a>
    </div>
    </div>
  )
}

export default About