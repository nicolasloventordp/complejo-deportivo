import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faBaseball,faBasketballBall} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import MenuItemIcon from './MenuItemIcon'
export default function MenuItem({ className, id, icon, route }) {
  return (
    <div className={className} id={id}>
          <Link to={route}>
            <MenuItemIcon className={"menu__item-icon"} icon={icon}/>
            <MenuItemTitle className={"menu__item-title"}/>
          </Link>
    </div>
        /*<div className="menu__item" id="menuTenis">
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
        </div>*/
      
  )   
}