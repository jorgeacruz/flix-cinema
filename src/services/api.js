import axios from 'axios';

//base URL - https://api.themoviedb.org/3/
// URL API - movie/now_playing?api_key=91e6d8f32b0345ff9d247af3d3d08f31

const api = axios.create({
baseURL:'https://api.themoviedb.org/3/'
});

export default api;
