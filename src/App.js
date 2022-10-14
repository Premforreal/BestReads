import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Addbook from './components/Addbook';
import Books from './components/Book/Books';
import BookUpdate from './components/Book/BookUpdate';
import BookDetails from './components/Book/BookDetails';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
<React.Fragment>
  <Header/>
//     <Home/>
  <main>
    <Routes>
        <Route path='/bestreads' element={<Home/>} exact/>
        <Route path='/add' element={<Addbook/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        <Route path='/books' element={<Books/>} exact/>
        <Route path='/books/:id/update' element={<BookUpdate/>} exact/>
        <Route path='/books/:id' element={<BookDetails/>} exact/>         
    </Routes>    
  </main>
</React.Fragment>
  
  );
}

export default App;
