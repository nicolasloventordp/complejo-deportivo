import './style.css'
import { Carousel } from 'react-responsive-carousel'
import imagenCanchas from '../../assets/images/home-canchas.jpg'
import imagenTenis from '../../assets/images/tenis-1.jpg'
import imagenCumple from '../../assets/images/cumple.jpg'
import imagenEscuela from '../../assets/images/escuela.jpg'
import imagenMap from '../../assets/images/map.webp'
export default function Home() {
  return (
    <div className="home">
      <div className="home__carrousel box-shadow-1">
        <Carousel autoPlay>
                <div>
                    <img src={imagenCanchas} class="home__carrousel-img"/>
                    <p className="legend">CANCHAS DE FUTBOL</p>
                </div>
                <div>
                    <img src={imagenTenis} class="home__carrousel-img"/>
                    <p className="legend">CANCHAS DE TENIS</p>
                </div>
        </Carousel>
      </div>
      <div className="home__cards-container">
        <div className="home__cards-item box-shadow-1">
          <div className="home__cards-item-container">
            <img src={imagenCumple} />
            <span>FESTEJÁ TU CUMPLEAÑOS CON NOSOTROS</span>
          </div>
        </div>
        <div className="home__cards-item box-shadow-1">
          <div className="home__cards-item-container">
            <img src={imagenEscuela} />
            <span>ESCUELA DE FÚTBOL </span>
          </div>
        </div>
        <div className="home__cards-item box-shadow-1">
          <div className="home__cards-item-container">
            <img src={imagenMap} />
            <span>¿CÓMO LLEGAR?</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}