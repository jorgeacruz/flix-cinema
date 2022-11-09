import { useEffect, useState } from 'react';
import api from '../../services/api';

function Home() {

    const [filmes, setFilmes] = useState();

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "91e6d8f32b0345ff9d247af3d3d08f31",
                    language: "pt-BR",
                    page: 1
                }
            })
            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
        }
        loadFilmes();
    }, [])

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((f) => {
                    return (
                        <article key={f.id}>
                            <strong>{f.title}</strong>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}
export default Home;