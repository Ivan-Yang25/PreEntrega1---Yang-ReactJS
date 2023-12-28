import { useState, useEffect } from 'react';
import Card from '../Card/card';
import "./CreateCard.css";

import {Link} from 'react-router-dom';

const CreateCard = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://rickandmortyapi.com/api/character")
            .then((info) => info.json())
            .then((data) => setUsers(data.results));
    }, []);

    return (
        <div className="create__card">
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <Link to={`/detail/${user.id}`}>
                            <Card user={user} />
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default CreateCard;