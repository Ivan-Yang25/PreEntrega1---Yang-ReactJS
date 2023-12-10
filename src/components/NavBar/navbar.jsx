import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';

const NavBar = () => {

    return (
        <div className='navbar'>
            <a href="#">Inicio</a>
            <a href="#">Shopping</a>
            <a href="#">Comentarios</a>
            <div>   
                <ShoppingCartIcon  color="secondary"/>
                <span>4</span>
            </div>
            
        </div>
    );
};

export default NavBar;