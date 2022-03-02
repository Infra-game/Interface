import React from 'react'
import {EmailRounded, LightModeRounded, DarkModeRounded, NotificationsRounded, Search} from '@mui/icons-material';
import {  Link  } from "react-router-dom";
import { Input, InputAdornment } from '@mui/material';

const Topbar = ({darkmode, setDarkmode}) => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarGroup"> 
                    <Link to="/">
                        <span className="logo"><h1>LobbyWan</h1></span>
                    </Link>
                    <Input
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                    type="text"
                    className='searchBar'
                    placeholder='Recherche...' />
                </div>
               
                <div className="topbarGroup">
                    <span className='options'>
                        <button className='icon-button' onClick={() => setDarkmode()}>
                            {darkmode ?
                                <LightModeRounded/>
                                : <DarkModeRounded/>
                            }
                        </button>
                        <button className='icon-button'>
                            <NotificationsRounded />
                        </button>
                        <button className='icon-button'>
                            <EmailRounded />
                        </button>
                    </span>
                    <span className='user-info'>
                        <img src="./images/avatar.png" alt="Avatar par défaut" />
                        <span>
                            <p className='username'>Bubble binks</p>
                            <p className='role'>Administrateur</p>
                        </span>
                    </span>
                 </div>
            </div>
        </div>
    )
}

export default Topbar;