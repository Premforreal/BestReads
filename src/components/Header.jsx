import React,{useState} from 'react';
import {AppBar,Typography,Toolbar,Tabs,Tab } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import '../App.css';
import {NavLink} from "react-router-dom";

function Header() {
const [value, setValue] = useState()

  return (
    <AppBar sx={{backgroundColor:"#f9f9e9",color:'#675544'}} className='AppBar' position='sticky'>
        
        <Toolbar >
        <Tabs   indicatorColor='secondary' 
                    value={value} onChange={(e,val)=>{setValue(val)}} sx={{color:'black',display: 'grid'}}>

                  <Tab  LinkComponent={NavLink} to='/' 
                      sx={{ textTransform: 'lowercase' }}
                      label={ <div className='logo'>
                                  <LocalLibraryIcon sx={{color:'#553b08',fontSize:'48px'}}/>
                                  <h1>best</h1>reads
                              </div>
                            } />
                
                  <Tab LinkComponent={NavLink} to='/add' label='Add' sx={{fontWeight:600,fontSize:'16px'}}/>
                  <Tab LinkComponent={NavLink} to='/books' label='Books' sx={{fontWeight:600,fontSize:'16px'}}/>
                  <Tab LinkComponent={NavLink} to='/about' label='About' sx={{fontWeight:600,fontSize:'16px'}}/>
            </Tabs>  
        </Toolbar>

    </AppBar>
  )
}

export default Header