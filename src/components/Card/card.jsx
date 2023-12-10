import React from 'react';
import "./card.css";

const Card = (props) => {

    return(

        <div className="section__div">
            <img src={props.img} />
            <h4>{props.msj}</h4>
            <span>{props.submsj}</span>
            <button>Comprar</button>
        </div>
    );
};

export default Card;