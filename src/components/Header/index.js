import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">Cinema Flix Unlimited</Link>
            <Link to="/favoritos" className="favoritos">Meus Favoritos</Link>
        </header>
    );
}