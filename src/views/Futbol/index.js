import './style.css'
import imagenCancha from '../../assets/images/home-canchas.jpg'
import FutbolCard from './components/FutbolCard'

const cardsFutbol = [
  { 
    img: imagenCancha, 
    title: "FÚTBOL 8", 
    caracteristicas: ['CESPED SINTETICO'],
    servicios: ['CESPED SINTETICO'],
  }
]
export default function Futbol() {
  return (
    <div className="futbol">
      <div className="futbol-container">
        {cardsFutbol?.map( (card) => 
          <FutbolCard img={card.img} title={card.title} caracteristicas={card.caracteristicas} servicios={card.servicios}/>)}
      </div>
    </div>
  );
}