import './App.css';
import TerraNavbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './home/home';
import Events from './events/events';
import Weddings from './weddings/weddings';
import Overnighting from './overnighting/overnighting';


function App() {
  return (
      <Router>
        <TerraNavbar />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/weddings' element={<Weddings />} />
          <Route path='/overnighting' element={<Overnighting />} />
        </Routes>
      </Router>
  );
}


export default App;
