import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Erro from './pages/erro';
import Home from './pages/home';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/react_buscarCep/' element={<Home />} />
                <Route path='/react_buscarCep' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;