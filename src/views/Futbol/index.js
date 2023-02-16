import './style.css'
import imagenCancha from '../../assets/images/home-canchas.jpg'
import FutbolCard from './components/FutbolCard'

const cardsFutbol = [
  {
    img: imagenCancha,
    title: "CANCHA FÚTBOL 5",
    caracteristicas: ['CESPED SINTETICO','CESPED SINTETICO','CESPED SINTETICO','CESPED SINTETICO','CESPED SINTETICO','CESPED SINTETICO'],
    servicios: ['CESPED SINTETICO'],
  },
  {
    img: imagenCancha,
    title: "CANCHA FÚTBOL 8",
    caracteristicas: ['CESPED SINTETICO'],
    servicios: ['CESPED SINTETICO'],
  },
  {
    img: imagenCancha,
    title: "CANCHA FÚTBOL 9",
    caracteristicas: ['CESPED SINTETICO'],
    servicios: ['CESPED SINTETICO'],
  },
  {
    img: imagenCancha,
    title: "CANCHA FÚTBOL 11",
    caracteristicas: ['CESPED SINTETICO'],
    servicios: ['CESPED SINTETICO'],
  },
]
export default function Futbol() {
  return (
    <div className="futbol">
      {cardsFutbol?.map((card) =>
        <FutbolCard img={card.img} title={card.title} caracteristicas={card.caracteristicas} servicios={card.servicios} />)}
    </div>
  );
}