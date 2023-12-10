import React from 'react';
import Card from '../Card/card';
import "./body.css";

const Body = (props) => {

    return (

        <section className="body__section">

            <Card
                img="/src/assets/Desarrollo-web.png"
                msj="Curso de Desarrollo web"
                submsj="Aprende el curso solo a $1000"
            />

            <Card
                img="/src/assets/JS.png"
                msj="Curso de JavaScript"
                submsj="Aprende el curso solo a $2400"
            />

            <Card
                img="/src/assets/PHP.png"
                msj="Curso de PHP"
                submsj="Aprende el curso solo a $3000"
            />

            <Card
                img="/src/assets/Java.jpg"
                msj="Curso de Java"
                submsj="Aprende el curso solo a $2400"
            />

            <Card
                img="/src/assets/ReactJS.png"
                msj="Curso de ReactJS"
                submsj="Aprende el curso solo a $3500"
            />

            <Card
                img="/src/assets/TypeScript.png"
                msj="Curso de TypeScript"
                submsj="Aprende el curso solo a $1500"
            />

        </section>

    );
};

export default Body;