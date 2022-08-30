import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home'
import Lodging from './pages/lodging'


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
