import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faBaseball,faBasketballBall} from '@fortawesome/free-solid-svg-icons'
export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__item">
        <div className="menu__item-icon"><FontAwesomeIcon icon={faFutbol} /></div>
        <div className="menu__item-title">FÚTBOL</div>
      </div>
      <div className="menu__item">
        <div className="menu__item-icon"><FontAwesomeIcon icon={faBaseball} /></div>
        <div className="menu__item-title">TENIS</div>
      </div>
      <div className="menu__item">
        <div className="menu__item-icon"><FontAwesomeIcon icon={faBasketballBall} /></div>
        <div className="menu__item-title">BASCKET</div>
      </div>
    </div>
  );
}