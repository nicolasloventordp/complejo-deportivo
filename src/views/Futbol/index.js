import './style.css'
import imagenCancha from '../../assets/images/home-canchas.jpg'

export default function Futbol() {
  return (
    <div className="futbol">
      <div className="futbol-container">
        <div className="futbol__card">
          <img className="futbol__card-img" src={imagenCancha} />
          <div className="futbol__card-info">
            <div>
              <span>Caracteristicas</span>
              <span>Servicios</span>
            </div>
            <button>RESERVAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}