import React from 'react'
import { LightModeRounded, DarkModeRounded, NotificationsRounded, PowerSettingsNewRounded} from '@mui/icons-material';
import {  Link  } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

/**
 * create top bar on the site 
 * @param { string } darkmode
 * @param { string } setDarkmode 
 * @returns {Promise}
 */
const Topbar = ({darkmode, setDarkmode, user, history}) => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/login");
    }

    const showConfirm = () => {
        confirmAlert({
            title: `Déconnexion`,
            message: `Voulez-vous vraiment vous déconnecter ?`,
            buttons: [
                {
                    label: "Oui",
                    onClick: () => handleLogout()
                },
                {
                    label: "Non",
                    onClick: () => onclose
                }
            ]
        })
    }
    
    const getRole = () => {
      switch (user.role) {
        case "user":
            return "Utilisateur";
        case "admin":
            return "Administrateur";
        default:
            break;
      }
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarGroup"> 
                    <Link to="/">
                        <span className="logo"><h1>LobbyWan</h1></span>
                    </Link>
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
                            <PowerSettingsNewRounded  onClick={() => showConfirm()}/>
                        </button>
                    </span>
                    <span className='user-info'>
                        <img src="./images/avatar.png" alt="Avatar par défaut" />
                        <span>
                            <p className='username'>{user.username}</p>
                            <p className='role'>{getRole()}</p>
                        </span>
                    </span>
                 </div>
            </div>
        </div>
    )
}

export default Topbar;