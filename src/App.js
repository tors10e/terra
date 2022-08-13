import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
            <header className="mb-auto">
      <Navbar/>
            </header>
        </div>
    </div>
  );
}

export default App;
