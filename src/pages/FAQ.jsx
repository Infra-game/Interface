import React from 'react';
import { FillWidget } from '../component/Widgets';

const FAQ = () => {
    return (
        <div className='page FAQ'>
            <FillWidget size="80">
                <h1>Comment lancer un jeu ?</h1>
                <p>Dans la page Jeux, cliquer sur lancer un serveur. L'adresse IP vous seras transmise par la suite et sera notée dans la page xxx.</p>
                <h1>Comment configurer un jeu ?</h1>
                <p>Dans la page Config, sélectionner le jeu souhaité et remplir les différents champs puis cliquer sur le bouton sauvegarder. Les config seront prises en compte lors du prochain lancement du jeu.</p>
                <h1>Comment signaler un bug ?</h1>
                <p>Dans la page Bug Report, sélectionner le type de bug rencontré, puis entrer le message.</p>
            </FillWidget>
        </div>
    );
};

export default FAQ;