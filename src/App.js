import './App.css';
import Home from './Home';
import Technixia from './technixia';
import WellnessZ from './wellnessZ';
import Sociohood from './sociohood';
import Cinepebble from './cinepebble';
import AnsrCoach from './ansrcoach';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cinepebble" element={<Cinepebble />} />
        <Route path="/technixia" element={<Technixia />} />
        <Route path="/wellnessZ" element={<WellnessZ />} />
        <Route path="/sociohood" element={<Sociohood />} />
        <Route path="/ansrcoach" element={<AnsrCoach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
