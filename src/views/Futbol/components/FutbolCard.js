import Button from "../../../components/Button"
export default function FutbolCard({ img, title, caracteristicas, servicios }) {
  return (
    <div className="futbol-card box-shadow-1">
      <img src={img} />
      <div className="futbol-card__info">
        <h1>{title}</h1>
        <div className="futbol-card__info-grid">
          <div className="futbol-card__info-grid-caracteristicas">
            <span>CARACTERISTICAS</span>
            {caracteristicas?.map((carac) => <p>•{carac}</p>)}
          </div>
          <div className="futbol-card__info-grid-servicios">
            <span>SERVICIOS</span>
            {servicios?.map((serv) => <p>•{serv}</p>)}
          </div>
        </div>
        <div className="futbol-card__info-button">
          <Button text={"RESERVAR"} />
        </div>
      </div>
    </div>

  )
}