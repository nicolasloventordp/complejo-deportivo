
export default function Button({ className, text }) {
    return (
        <button className={className + " box-shadow-1"}><h4>{text}</h4></button>
    );
}