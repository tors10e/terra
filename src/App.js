import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home';
import Lodging from './pages/lodging';
import Events from './pages/events';
import Weddings from './pages/weddings';


function App() {
  return (
      <Router>
        <Navbar />
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
