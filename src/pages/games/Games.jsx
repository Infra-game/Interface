import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from "../../component/sidebar/Sidebar";
import "./Games.css"

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
        <div className="games">
            <Sidebar role={userRole}/>
            <div className="content">
                <h1>Jeux disponibles</h1>
                <ul>
                    <li className="game">
                        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png" alt="Icône minecraft" />
                        <h2>Minecraft</h2>
                        <button onClick={() => startGame("minecraft")}>Lancer le serveur</button>
                        <button onClick={() => destroyGame("minecraft")}>Éteindre le serveur</button>
                    </li>
                    <li className="game">
                        <img src="https://www.teeworlds.com/images/splashtee.png" alt="Icône teeworlds" />
                        <h2>TeeWorlds</h2>
                        <button onClick={() => startGame("teeworlds")}>Lancer le serveur</button>
                        <button onClick={() => destroyGame("teeworlds")}>Éteindre le serveur</button>
                    </li>
                </ul>
                <h2>{response}</h2>
            </div>
        </div>
    );
};

export default Games;