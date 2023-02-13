import './style.css'
import { faFutbol, faBaseball, faBasketballBall, faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import MenuItem from './components/MenuItem'
const itemsMenu = [
  { id: "menuFutbol", route: "/futbol", icon: faFutbol, title: "FÚTBOL"},
  { id: "menuTenis", route: "/tenis", icon: faBaseball, title: "TENIS"},
  { id: "menuBascket", route: "/bascket", icon: faBasketballBall, title: "BASCKET"},
  { id: "menuEventos", route: "/eventos", icon: faCalendarCheck, title: "EVENTOS"}
]
export default function Menu() {
  return (
    <div className="app-menu">
      <div className="app-menu__container">
        {itemsMenu.map( (item) => 
          <MenuItem id={item.id} route={item.route} icon={item.icon} title={item.title}/>
        )}
      </div>  
    </div>
  )   
}