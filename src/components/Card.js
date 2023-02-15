export default function Card({ text, imagen}) {
    return (
        <div className="card box-shadow-1">
            <div className="card__title">
                <span>{text.toUpperCase()}</span>
            </div>
            <img src={imagen} />
        </div>
    );
}