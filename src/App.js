import './App.css';
import Home from './Home';
import Technixia from './technixia';
import WellnessZ from './wellnessZ';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technixia" element={<Technixia />} />
        <Route path="/wellnessZ" element={<WellnessZ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
