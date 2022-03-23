import { PeopleAlt,BugReport, Forum, Help, Monitor, Memory, SettingsApplications, Timeline , VideogameAsset, House } from '@mui/icons-material';
import { useEffect } from 'react';
import {  Link  } from "react-router-dom";

const Sidebar = ({page,role}) => {
    useEffect(() => {
        let listItems = document.getElementsByClassName("sidebarListItem");
        for(let i=0;i<listItems.length;i++) {
            if(listItems[i].id !== page) {
                listItems[i].classList.remove("active");
            } else {
                listItems[i].classList.add("active");
            }
        }
    })

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarGroup">
                    <h3 className="sidebarGroupTitle">Tableau de bord</h3>
                    <ul className="sidebarList">
                        <Link to="/" >
                            <li id="home" className="sidebarListItem">
                                <House /><p>Accueil</p>
                            </li>
                        </Link>
                        <Link to="/monitoring">
                            <li id="monitoring" className="sidebarListItem">
                                <Monitor/><p>Monitoring</p>
                            </li>
                        </Link>
                        <li id="stats" className="sidebarListItem">
                            <Timeline/><p>Stats</p>
                        </li>
                        <Link to="/users">
                            <li id="user" className="sidebarListItem">
                                <PeopleAlt/><p>Utilisateurs</p>
                            </li>
                        </Link>
                        <Link to="/games">
                            <li id="games" className="sidebarListItem">
                                <VideogameAsset/><p>Jeux</p>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarGroup">
                    <h3 className="sidebarGroupTitle">Gestion du Serveur</h3>
                    <ul className="sidebarList">
                    <Link to="/Config">
                        <li id="config" className="sidebarListItem">
                            <SettingsApplications /><p>Config</p>
                        </li>
                    </Link>

                    <Link to="/FTP">
                        <li id="ftp" className="sidebarListItem">
                            <SettingsApplications /><p>Accès FTP</p>
                        </li>
                    </Link>
                        <li id="ressources" className="sidebarListItem">
                            <Memory/><p>Ressources</p>
                        </li>
                    </ul>
                </div>
                <div className="sidebarGroup">
                    <h3 className="sidebarGroupTitle">Support</h3>
                    <ul className="sidebarList">
                    <Link to="/bugReport">
                        <li id="bugreport" className="sidebarListItem">
                            <BugReport /><p>Bug Report </p>
                        </li>
                    </Link>

                        <li id="faq" className="sidebarListItem">
                            <Help/><p>FAQ</p> 
                        </li>
                        <li id="forum" className="sidebarListItem">
                            <Forum/><p>Forum</p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        
       
    )
}

export default Sidebar;