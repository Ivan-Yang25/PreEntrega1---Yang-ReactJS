import React, {useState} from 'react';
import './header.css';

const Header = (props) => {

    const [counter, setCounter] = useState(1);

    const Incrementar = () => {

        setCounter(counter + 1);
    };

    return(
        <div className='header'>
            <h1>
                {props.title} y aca el counter : {counter}
            </h1>
            <button onClick={Incrementar}>incrementar</button>
        </div>
    );
};

export default Header;