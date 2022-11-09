import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';



export default function Favoritos() {

    const [filmes,setFilmes] = useState([]);

useEffect(() => {

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])
})


    return (
        <div className='meus-filmes'>
            <h1>Minha lista Favorita</h1>
            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}className='meus-favoritos'>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filmes/${item.id}`}>Ver Detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}