import React from 'react';

export const DummyWidget = ({size}) => {
    return (
        <div className={`widget ${size ? "size-"+size : ""}`}>
            <h1>DUMMY WIDGET</h1>
        </div>
    );
};

export const GamesWidget = ({size,startGame,destroyGame}) => {
    return (
        <div className={`widget games-widget ${size ? "size-"+size : ""}`}>
            <h1>Jeux Disponibles</h1>
            <ul className='game-list'>
                <li className='game-card'>
                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png" alt="Icône minecraft" />
                    <h2>Minecraft</h2>
                    <button onClick={() => startGame("minecraft")}>Lancer le serveur</button>
                    <button onClick={() => destroyGame("minecraft")}>Éteindre le serveur</button>
                </li>
                <li className='game-card'>
                    <img src="https://www.teeworlds.com/images/splashtee.png" alt="Icône teeworlds" />
                    <h2>TeeWorlds</h2>
                    <button onClick={() => startGame("teeworlds")}>Lancer le serveur</button>
                    <button onClick={() => destroyGame("teeworlds")}>Éteindre le serveur</button>
                </li>
            </ul>
        </div>
    );
}

export const ConfigWidget = ({size,children}) => {
    return (
        <div className={`widget config-widget ${size ? "size-"+size : ""}`}>
            {children}
        </div>
    );
}

