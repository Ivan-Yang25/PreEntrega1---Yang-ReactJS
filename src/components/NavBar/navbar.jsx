import {Link} from 'react-router-dom';
import './navbar.css';

const NavBar = () => {

    return (
        <div className='navbar'>
            <Link to="/Category/Human">
                Humanos
            </Link>
            <Link to="/Category/Alien">
                Alien
            </Link>
            <Link to="/">
                Inicio
            </Link>
        </div>
    );
};

export default NavBar;