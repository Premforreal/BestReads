import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Addbook from './components/Addbook';
import Books from './components/Book/Books';
import Home from './components/Home';;

function App() {
  return (
<React.Fragment>
  <Header/>
  <main>
    <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/add' element={<Addbook/>} exact/>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/' element={<Books/>} exact/>    
    </Routes>    
  </main>
</React.Fragment>
  
  );
}

export default App;
