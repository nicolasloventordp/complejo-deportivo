import './style.css'
import CarouselResposive from '../../components/CarouselResposive'
import Card from '../../components/Card'
import imagenCanchas from '../../assets/images/home-canchas.jpg'
import imagenTenis from '../../assets/images/tenis-1.jpg'
import imagenCumple from '../../assets/images/cumple.jpg'
import imagenEscuela from '../../assets/images/escuela.jpg'
import imagenMap from '../../assets/images/map.webp'
export default function Home() {
  
  /* Todo:
  * Corregir heigth carousel
  * Agregar iconos
  */

  const carouselItems = [
    { legend: 'CANCHAS DE FÚTBOL', imagen: imagenCanchas },
    { legend: 'CANCHAS DE TENIS', imagen: imagenTenis },
  ]
  const cards = [
    { text: 'EVENTO', imagen: imagenCumple },
    { text: 'ESCUELA DE FÚTBOL', imagen: imagenEscuela },
    { text: 'UBICACIÓN', imagen: imagenMap }
  ]
  
  return (
    <div className="home">
      <div className="home__carrousel box-shadow-1">
        <CarouselResposive items={carouselItems} />
      </div>
      <div className="home__cards">
        {cards.map((card) =>
          <Card text={card.text} imagen={card.imagen} />
        )}
      </div>
    </div>
  );
}