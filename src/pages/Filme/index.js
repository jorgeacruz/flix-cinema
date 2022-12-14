import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Filme() {

    //acessando Id od filme
    const { id } = useParams();
    const navigation = useNavigate();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            //acessando a api
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "91e6d8f32b0345ff9d247af3d3d08f31",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    console.log(response.data);

                    //acessa os dados do filme
                    setFilme(response.data);
                    setLoading(false);

                })
                .catch(() => {
                    console.log('Filme não encontrado');
                    //redireciona para home caso não encontre o filme
                    navigation('/', { replace: true });
                    return;
                })
        }

        loadFilme();

        //desmonta component 
        return () => {
            console.log('component Desmontado');
        }

    }, [navigation, id])

    // função salvar fime
    function salvarFilme() {
        const minhaLista = localStorage.getItem('@primeflix');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if (hasFilme) {
            toast.warn('Esse filme já esta na sua lista');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso.')

    }

    //Loading condicional
    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando filme</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <p>{filme.tagline}</p>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average}</strong>
            <div className='area-btn'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target='blank'>Trailer</a>
                </button>
                <button style={{backgroundColor:'#f60', width:300}} onClick={() => navigation('/')}> voltar a lista de filmes</button>
            </div>
        </div>
    );
}