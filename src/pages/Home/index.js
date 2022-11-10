import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';


function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "91e6d8f32b0345ff9d247af3d3d08f31",
                    language: "pt-BR",
                    page: 1,
                }
            })
            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results)

            //apos carregdar os filmes passa loading para false
            setLoading(false);
        }

        loadFilmes();

    }, [])

    //condicional do loading
    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando seus filmes...</h2>
            </div>
        )
    }
    
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