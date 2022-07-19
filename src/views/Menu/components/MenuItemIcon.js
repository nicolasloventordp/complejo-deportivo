import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MenuItemIcon({ icon }) {
  return (
    <div className="menu__item-icon">
      <FontAwesomeIcon icon={icon} />
    </div>
  )   
}