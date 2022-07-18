import './style.css'
import logo from '../../assets/images/logo.jpg'
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="header">
     
        <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>COMPLEJO DEPORTIVO</span>
          </Link>
        </div>
 
      <div className="header__info">

      </div>
    </div>
  );
}