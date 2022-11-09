import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';


// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);


    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                }
            })
            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10))
        }

        loadFilmes();

    }, [])

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((f) => {
                    return (
                        <article key={f.id}>
                            <strong>{f.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt={f.title} />
                            <Link to={`/filme/${f.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;