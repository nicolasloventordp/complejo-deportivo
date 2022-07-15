import './App.css'
import Header from './views/Header'
import Menu from './views/Menu'
import Home from './views/Home'


export default function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <Menu />
        <Home />
      </div>
    </div>
  );
}