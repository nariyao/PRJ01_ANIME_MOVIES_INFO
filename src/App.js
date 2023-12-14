import logo from './logo.svg';
import './CSS/App.css';
import Home from './Pages/Home';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='container'>
      <Home />
      </div>
    </div>
  );
}

export default App;
