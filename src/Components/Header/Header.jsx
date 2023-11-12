import './Header.css'
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer'

const Header = () => {
    return (
        <>
                <header className="Header">
                    <nav className='Header--nav'>
                        <li>
                            <Routes>
                            <Link to='/to' element={Footer}>
                                Header
                            </Link>
                            </Routes>
                        </li>
                    </nav>
                </header>
            
        </>
    )
}

export default Header;