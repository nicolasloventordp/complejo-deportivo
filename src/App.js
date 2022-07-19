import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Header from './views/Header'
import Menu from './views/Menu'
import Home from './views/Home'
import Futbol from './views/Futbol'
import Tenis from './views/Tenis'


export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Menu />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/futbol" element={<Futbol/>} />
            <Route path="/tenis" element={<Tenis/>} />
          </Routes>
        </div>
      </Router>
    </div>
    
      
            
       
  
  );
}