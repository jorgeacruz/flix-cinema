import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';
import Header from './components/Header';
import Favoritos from './pages/Favoritos';


export default function RouteApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Filme/:id" element={<Filme/>} />
                <Route path="/Favoritos" element={<Favoritos/>} />
                
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}