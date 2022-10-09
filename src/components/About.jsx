import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import './Book/book.css';
import EmailIcon from '@mui/icons-material/Email';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function About() {
  return (<div className='About'>
          <h1>About</h1>
          <p>This is a 
               <Link href="https://www.goodreads.com/" target="_blank" rel="noopener noreferrer"> good reads </Link> 
                clone with CRUD functionality made using MERN stack. 
                Bestreads is my attempt to implement my beginner skills on node and react.
                Still, many things need to be covered like pagination, multiple users 
                and authentication etc. The project will be upgraded with all the useful features in future. <br/>
                Please mail me your suggestions. Thank you.
          </p>
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