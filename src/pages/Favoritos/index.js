import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';



export default function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])
    
    function excluirFilme(id) {
        // filtrar filmes e retirar do store
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    }


    return (
        <div className='meus-filmes'>
            <h1>Minha lista Favorita</h1>
            {
                filmes.length === 0 && <span> Você não possui nenhum filme salvo :(</span>
            }
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id} className='meus-favoritos'>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filmes/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}