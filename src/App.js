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
      
      <div className="main">
        <Router>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/futbol" element={<Futbol/>} />
            <Route path="/tenis" element={<Tenis/>} />
          </Routes>
        </Router>
      </div>
        
    </div>
    
      
            
       
  
  );
}