import './style.css'
import logo from '../../assets/images/logo.jpg'
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
        <span>COMPLEJO DEPORTIVO</span>
      </div>
      <div className="header__info">

      </div>
    </div>
  );
}