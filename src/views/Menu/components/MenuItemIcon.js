import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MenuItemIcon({ className, icon }) {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )   
}