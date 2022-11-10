import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <Link to="/" className="logo">Dev. Jorge Cruz</Link>
            <div className='icon-footer'>
                <a href='https://github.com/jorgeacruz'><img src={require('./img/git.png')} alt="" /></a>
                <a href='https://github.com/jorgeacruz/flix-cinema'><img src={require('./img/repo.png')} alt="" /></a>
            </div>
        </footer>
    );
}