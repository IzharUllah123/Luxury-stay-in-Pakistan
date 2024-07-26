import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import AboutUs from './AbouUs';
import ContactUS from './ContactUs';
import Hotel from './Hotel';
import Single from './Single';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/contactus' element={<ContactUS />} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/villa/:id' element={<Single/>}/>
      </Routes>
    
    </Router>
    </div>
  );
}

export default App;
