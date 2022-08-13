import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
      <Router>
    <div className="App">

    </div>
          <Routes>
              <Route exact path='/home' exact element={<Home />} />
          </Routes>
      </Router>
  );
}

export default App;
