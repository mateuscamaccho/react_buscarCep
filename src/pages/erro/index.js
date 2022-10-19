import { Link } from "react-router-dom";

import './style.css';

function Erro() {
    return (
        <div className="erro">
            <h2>Ops! Parece que a página procurada não existe.</h2>
            <Link to="/">Voltar para tela inicial</Link>
        </div>
    )
}

export default Erro;