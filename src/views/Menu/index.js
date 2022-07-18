import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faBaseball,faBasketballBall} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__item" id="menuFutbol">
        <Link to="/futbol">
          <div className="menu__item-icon"><FontAwesomeIcon icon={faFutbol} /></div>
          <div className="menu__item-title">FÚTBOL</div>
        </Link>
      </div>
     
      <div className="menu__item" id="menuTenis">
        <Link to="/tenis">
          <div className="menu__item-icon"><FontAwesomeIcon icon={faBaseball} /></div>
          <div className="menu__item-title" >TENIS</div>
        </Link>
      </div>
      
      <div className="menu__item" id="menuBascket">
        <Link to="/bascket">
          <div className="menu__item-icon"><FontAwesomeIcon icon={faBasketballBall} /></div>
          <div className="menu__item-title">BASCKET</div>
        </Link>
      </div>
     
    </div>
  )   
}