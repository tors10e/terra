import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home'
import Lodging from './pages/lodging'
import Events from './pages/events'


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/lodging' element={<Lodging />} />
          <Route path='/events' element={<Events />} />
        </Routes>
      </Router>
  );
}

export default App;
