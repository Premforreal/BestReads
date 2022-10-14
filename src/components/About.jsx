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
                  <p>This is a &nbsp; 
                      <Link href="https://www.goodreads.com/" target="_blank" rel="noopener noreferrer"> 
                          <strong style ={{
                            textDecoration: 'underline',
                            fontWeight:'500'
                            }}>good reads
                          </strong> 
                      </Link> 
                      &nbsp;  clone with CRUD functionality made using MERN stack.
                    </p>
                <hr style={{height:'1px',width:'100%',margin:'5px'}}/>
                
                <p style ={{
                                  textDecoration: 'underline',
                                  fontWeight:'500',
                                  width:'100%'
                                }}>Technologies used :</p>
                <div className="list">
                      <div className="frontend">
                          <ul>
                            <li style ={{
                                  textDecoration: 'underline'
                                }}>Frontend</li>
                            <ul> 
                              <li>React.js</li>
                              <li>CSS</li>
                              <li>MUI</li>   
                              <li>Axios</li>
                            </ul>
                          </ul>
                        </div>
                  
                        <div className="backend">
                            <ul>
                              <li style ={{
                                        textDecoration: 'underline'
                                      }}>Backend</li>
                                <ul> 
                                  <li>Node.js and Express</li>
                                  <li>MongoDB & mongoose</li>
                                  <li>Nodemon</li>
                                  <li>Cors</li>   
                                </ul>
                            </ul>
                          </div>
                  </div>
                  <hr style={{height:'1px',width:'100%',margin:'5px'}} />                          
                        <div className="coming-soon">
                            <ul>
                              <li style ={{
                                        textDecoration: 'underline'
                                      }}>Upcoming features (I want to add)</li>
                                <ul> 
                                  <li>Improving the UI</li>
                                  <li>Adding user authentication and authorization using JWT and Bcrypt</li>
                                  <li>Multiple users and their collection of books, discussions etc.</li>
                                </ul>
                            </ul>
                          </div>

          <hr style={{height:'1px',width:'100%',margin:'5px'}} />
          <div className='Icons'>
          <a className='github' href="https://github.com/Premforreal" target='blank'><GitHubIcon/></a>
          <a className='portfolio' href="https://prem-react-portfolio.netlify.app/" target='blank'><TerminalIcon/></a>
          <a className='linkedin' href="https://www.linkedin.com/in/premforreal/" target='blank'><LinkedInIcon/></a>
          <a className='gmail' href="mailto:premalakuntah@gmail.com" target='blank'><EmailIcon/></a>
    </div>
    </div>
  )
}

export default About