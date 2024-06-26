import './App.css';
import React, {useEffect } from 'react';
import TerraNavbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './home/home';
import Events from './events/events';
import Weddings from './weddings/weddings';
import Overnighting from './overnighting/overnighting';
import Store from './store/store';
import Container from 'react-bootstrap/Container';

import ReactGA from "react-ga4";
ReactGA.initialize("G-GRRHPDLTTM");

function App() {
  return (
      <Router>
            <TerraNavbar />
                    <Container className='d-flex w-100 h-100 mx-auto flex-column align-items-center'>
            <Routes>
              <Route exact path='/' exact element={<Home />} />
              <Route path='/events' element={<Events />} />
              <Route path='/weddings' element={<Weddings />} />
              <Route path='/overnighting' element={<Overnighting />} />
              <Route path='/store' element={<Store />} />
            </Routes>
           </Container>
      </Router>
  );
}


export default App;
