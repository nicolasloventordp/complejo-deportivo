import { Carousel } from 'react-responsive-carousel'
export default function CarouselResposive({ items }) {
  return (
    <Carousel autoPlay>
      {items.map((item) =>
        <div>
          <img src={item.imagen} class="home__carrousel-img" />
          <p className="legend">{item.legend}</p>
      </div>
      )}
      
    </Carousel>
  );
}