import './style.css'
import logo from '../../assets/images/logo.jpg'
import HeaderLogo from './components/HeaderLogo'
import HeaderInfo from './components/HeaderInfo'

export default function Header() {
  return (
    <div className="header">
      <div className="header-container main">
        <HeaderLogo className={"header__logo"} logo={logo}/>
        <HeaderInfo className={"header__info"} />
      </div>
    </div>
  );
}