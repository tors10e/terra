import './App.css';
import TerraNavbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './home/home';
import Lodging from './lodging/lodging';
import Events from './events/events';
import Weddings from './weddings/weddings';


function App() {
  return (
      <Router>
        <TerraNavbar />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/lodging' element={<Lodging />} />
          <Route path='/events' element={<Events />} />
          <Route path='/weddings' element={<Weddings />} />
        </Routes>
      </Router>
  );
}


export default App;
