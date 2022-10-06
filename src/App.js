import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Addbook from './components/Addbook';
import Books from './components/Book/Books';
import BookDetail from './components/Book/BookDetail';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
<React.Fragment>
  <Header/>
  <main>
    <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/add' element={<Addbook/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        <Route path='/books' element={<Books/>} exact/>
        <Route path='/books/:id' element={<BookDetail/>} exact/>        
    </Routes>    
  </main>
</React.Fragment>
  
  );
}

export default App;
