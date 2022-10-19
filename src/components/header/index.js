import './style.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>
                    BuscaCep
                </Link>
            </div>
        </header>
    )
}

export default Header; 