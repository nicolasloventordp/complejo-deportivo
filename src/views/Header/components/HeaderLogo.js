import { Link } from "react-router-dom"

export default function HeaderLogo({ className, logo }) {
    return (
        <div className={className}>
            <Link to="/">
                <img src={logo} alt="logo" />
                <span>COMPLEJO DEPORTIVO</span>
            </Link>
        </div>
    );
}