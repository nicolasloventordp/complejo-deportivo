import './style.css'
import logo from '../../assets/images/logo.jpg'
import HeaderLogo from './components/HeaderLogo'
import HeaderInfo from './components/HeaderInfo'

export default function Header() {
  return (
    <div className="app-header">
      <div className="app-header__container">
        <HeaderLogo className={"app-header__logo"} logo={logo}/>
        <HeaderInfo className={"app-header__info"} />
      </div>
    </div>
  );
}