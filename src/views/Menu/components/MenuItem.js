import { Link } from "react-router-dom"
import MenuItemIcon from './MenuItemIcon'
import MenuItemTitle from './MenuItemTitle'
export default function MenuItem({ id, icon, route, title}) {
  return (
    <div className="menu__item" id={id}>
          <Link to={route}>
            <MenuItemIcon icon={icon}/>
            <MenuItemTitle title={title}/>
          </Link>
    </div>
  )   
}