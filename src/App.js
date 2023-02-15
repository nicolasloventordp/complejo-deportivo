import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import Header from './views/Header'
import Menu from './views/Menu'
import Body from './views/Body'


export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Menu />
        <Body />
      </Router>
    </div>
    
      
            
       
  
  );
}