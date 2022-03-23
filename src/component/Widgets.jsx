import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from '../axiosConfig';
import { Chart as ChartComponent } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { formatDate } from '../Utils';
import { Select, MenuItem, InputLabel } from '@mui/material';

/**
 * Dummy widget generation
 * @param {String} size 
 * @returns {HTMLElement}
 */
export const DummyWidget = ({size}) => {
    return (
        <div className={`widget ${size ? "size-"+size : ""}`}>
            <h1>DUMMY WIDGET</h1>
        </div>
    );
};

/**
 * Generation of widget filled by html given between tags
 * @param {String} size 
 * @param {HTMLElement} children
 * @returns {HTMLElement}
 */
export const FillWidget = ({size,children}) => {
    return (
        <div className={`widget fill-widget ${size ? "size-"+size : ""}`}>
            {children}
        </div>
    );
}

/**
 * Generation of widget containing games
 * @param {String} size 
 * @param {Function} startGame
 * @param {Function} destroyGame
 * @returns {HTMLElement}
 */
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

/**
 * Generation of widget containing CPU data
 * @param {String} size 
 * @returns {HTMLElement}
 */
export const CPUWidget = ({size}) => {
    const [data, setData] = useState({
        datasets: [],
    });
    const [after, setAfter] = useState(600);
    const options = {
        color : "white"
    }

    useEffect(() => {
        const fetchData = async () => {
            axios
            .post("/monitoring/cpu", {points : 15, after})
            .then((res) => {
                const data = res.data.data.slice(0).reverse();
                setData({
                    labels : data.map((item) => formatDate(new Date(item.time * 1000),"JJ/MMMM/YYYY HH:mm:ss")),
                    datasets : [{
                        label : "CPU",
                        data : data.map((item) => item.softirq+item.user+item.system+item.iowait),
                        borderColor : 'rgb(59,87,231)',
                    }]
                })
            })
        }
        fetchData();
    }, [after]);

    return (
        <div className={`widget cpu-widget ${size ? "size-"+size : ""}`}>
            <div className='header'>
                <h1>CPU</h1>
                <p>&nbsp;(en %)</p>
            </div>
            <InputLabel id="select-label">Nombre de minutes</InputLabel>
            <Select
                labelId='select-label'
                value={after}
                label="Nombre de minutes"
                onChange={(e) => setAfter(e.target.value)}
            >
                <MenuItem value={600}>10</MenuItem>
                <MenuItem value={1800}>30</MenuItem>
                <MenuItem value={3600}>60</MenuItem>
            </Select>
            <ChartComponent type='line' data={data} options={options} />
        </div>
    )
}

/**
 * Generation of widget containing Load data
 * @param {String} size 
 * @returns {HTMLElement}
 */
 export const LoadWidget = ({size}) => {
    const [data, setData] = useState({
        datasets: [],
    });
    const [after, setAfter] = useState(600);
    const options = {
        color : "white"
    }

    useEffect(() => {
        const fetchData = async () => {
            axios
            .post("/monitoring/load", {points : 15, after})
            .then((res) => {
                const data = res.data.data.slice(0).reverse();
                setData({
                    labels : data.map((item) => formatDate(new Date(item.time * 1000),"JJ/MMMM/YYYY HH:mm:ss")),
                    datasets : [{
                        label : "Load",
                        data : data.map((item) => item.load5*100),
                        borderColor : 'rgb(59,87,231)',
                    }]
                })
            })
        }
        fetchData();
    }, [after]);

    return (
        <div className={`widget load-widget ${size ? "size-"+size : ""}`}>
            <div className='header'>
                <h1>Load</h1>
                <p>&nbsp;(en %)</p>
            </div>
            <InputLabel id="select-label">Nombre de minutes</InputLabel>
            <Select
                labelId='select-label'
                value={after}
                label="Nombre de minutes"
                onChange={(e) => setAfter(e.target.value)}
            >
                <MenuItem value={600}>10</MenuItem>
                <MenuItem value={1800}>30</MenuItem>
                <MenuItem value={3600}>60</MenuItem>
            </Select>
            <ChartComponent type='line' data={data} options={options} />
        </div>
    )
}

/**
 * Generation of widget containing RAM data
 * @param {String} size 
 * @returns {HTMLElement}
 */
 export const RAMWidget = ({size}) => {
    const [data, setData] = useState({
        datasets: [],
    });
    const options = {
        showTooltips: true
    }

    useEffect(() => {
        const convert = (value) => {
            let convertedValue = value;
            convertedValue = value/1000;
            return convertedValue;
        }

        const fetchData = async () => {
            axios
            .get("/monitoring/ram")
            .then((res) => {
                const data = res.data.data;
                console.log(data[0]);
                setData({
                    labels : ["free","used","cached","buffers"],
                    datasets : [{
                        label : "RAM",
                        data : [convert(data[0].free),convert(data[0].used),convert(data[0].cached),convert(data[0].buffers)],
                        backgroundColor : ['#5A910A','#D33718','#3366CC','#D66300'],
                        hoverOffset : 10,
                    }]
                })
            })
        }
        fetchData();
    }, []);

    return (
        <div className={`widget ram-widget ${size ? "size-"+size : ""}`}>
            <div className='header'>
                <h1>RAM</h1>
                <p>&nbsp;(en Gigabytes)</p>
            </div>
            <ChartComponent type='doughnut' data={data} options={options} />
        </div>
    )
}