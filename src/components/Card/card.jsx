import React from 'react';
import "./card.css";

const Card = ({user}) => {

    return(

        <div className="section__div">
            <img src={user.image} />
            <h4>{user.name}</h4>
            <span>{user.species}</span>
            <span>{user.gender}</span>
        </div>
    );
};

export default Card;