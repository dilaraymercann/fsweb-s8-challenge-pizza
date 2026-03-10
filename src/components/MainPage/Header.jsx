import { Link } from 'react-router-dom'
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src="/images/iteration-1-images/logo.svg" alt="Workintech Logo" />
            <div className="headerSection">
                <p>fırsatı kaçırma</p>
                <p className="header-text">
                    KOD ACIKTIRIR <br /> PIZZA, DOYURUR
                </p>
                <Link to="/order" className="orderButton">
                    ACIKTIM
                </Link>
            </div>
        </header>
    );
}