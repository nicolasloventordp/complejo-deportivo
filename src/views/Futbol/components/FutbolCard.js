import Button from "../../../components/Button"
export default function FutbolCard({ img, title, caracteristicas, servicios}) {
  return (
    <div className="futbol__card box-shadow-1">

        <div className="futbol__card-img">
          <img src={img} />
        </div>

        <div className="futbol__card-grid">
          <h1 className="futbol__card-grid-title">{title}</h1>
          <div className="futbol__card-grid-info">
            <div>
              <span>CARACTERISTICAS</span>
              {caracteristicas?.map( (carac) => <p>•{carac}</p>)}
            </div>
            <div>
              <span>SERVICIOS</span>
              {servicios?.map( (serv) => <p>•{serv}</p>)}
            </div>
            <Button className={"futbol__card-grid-button"} text={"RESERVAR"} />
          </div>
        </div>
    </div>
    
  )   
}