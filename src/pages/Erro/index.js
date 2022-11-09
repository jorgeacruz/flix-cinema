import '../Home/home.css';
import { Link } from 'react-router-dom';


export default function Erro() {
    return (
        <div className='e_container'>
            <h1> Erro 404</h1>
            <h2>Página não encontrada </h2>
            <Link to="/" style={{ margin: '50px 0' }}>Voltar para Home</Link>
        </div>
    );
}
