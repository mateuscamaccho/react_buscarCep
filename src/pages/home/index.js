import { useState } from 'react';
import api from '../../service/api';
import './style.css';
import logo from '../../imagens/logo.png'
import bg from '../../imagens/bg.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({})

    async function handleConsulta() {
        try {
            const response = await api.get(cep + "/json", {})
            console.log(response.data)
            setEndereco(response.data)
            setCep('')
        } catch (e) {
            toast.warn("Nao foi possivel consultar o CEP informado!")
        }

    }

    return (
        <div>
            <img src={bg} className="bg" alt="Buscador de CEP" />
            <div className="container-fluid">
                <img src={logo} alt="Buscador de CEP" />
                <div className='entrada'>
                    <input
                        type="text"
                        placeholder='Digite o CEP aqui, sem pontos e traços'
                        value={cep}
                        onChange={(e) => setCep(e.target.value)} />
                    <button onClick={handleConsulta}>Buscar</button>
                </div>
                <div className='saida'>
                    <div className='item'>
                        <strong>CEP:</strong> {endereco.cep}
                    </div>
                    <div className='item'>
                        <strong>LOGRADOURO:</strong> {endereco.logradouro}
                    </div>
                    <div className='item'>
                        <strong>BAIRRO:</strong> {endereco.bairro}
                    </div>
                    <div className='item'>
                        <strong>CIDADE/ESTADO:</strong> {endereco.localidade} / {endereco.uf}
                    </div>
                    <div className='item'>
                        <strong>DDD:</strong> {endereco.ddd}
                    </div>
                    <div className='item'>
                        <strong>Cód. IBGE:</strong> {endereco.ibge}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;