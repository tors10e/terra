import './App.css';
import React, {useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './home/home';
import Events from './events/events';
import Weddings from './weddings/weddings';
import Overnighting from './overnighting/overnighting';
import Store from './store/store';
import Trails from './trails/trails';
import Container from 'react-bootstrap/Container';
import { PhotoGallery } from './gallery/PhotoGalleryTest';


function App() {
  return (
      <Router>
        <Container className='d-flex w-100 h-100 mx-auto flex-column align-items-center'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/weddings' element={<Weddings />} />
            <Route path='/overnighting' element={<Overnighting />} />
            <Route path='/store' element={<Store />} />
            <Route path='/trails' element={<Trails />} />
            <Route path='/gallery' element={<PhotoGallery />} />
          </Routes>
         </Container>
      </Router>
  );
}


export default App;
