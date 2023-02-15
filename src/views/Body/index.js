import './style.css'
import { Routes, Route } from "react-router-dom"
import Home from '../Home/index'
import Futbol from '../Futbol/index'
import Tenis from '../Tenis/index'

export default function Body() {
  return (
    <div className="app-body">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/futbol" element={<Futbol/>} />
            <Route path="/tenis" element={<Tenis/>} />
        </Routes>
    </div>
  );
}