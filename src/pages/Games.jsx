import axios from '../axiosConfig';
import React, { useState } from 'react';
import { GamesWidget } from '../component/Widgets';


/**
 * definition of Games,statusGame, startGame, destroyGame consistencies
 * filling in the possible choices 
 * Game page 
 * @param { string } userRole
 * @returns 
 */
const Games = ({userRole}) => {
    const [response, setResponse] = useState("");

    const startGame = (gameName) => {
        axios
        .get(`http://localhost:5000/games/${gameName}/start`)
        .then((res) => {
            setResponse(res.data.message);
        })
    }

    const destroyGame = (gameName) => {
        axios
        .get(`http://localhost:5000/games/${gameName}/destroy`)
        .then((res) => {
            setResponse(res.data.message);
        })
    }
    
    return (
        <div className="page games">

            <GamesWidget size="80" startGame={(game) => startGame(game)} destroyGame={(game) => destroyGame(game)}/>

            <h2>{response}</h2>
        </div>
    );
};

export default Games;