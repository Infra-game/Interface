import { PeopleAlt,BugReport, Forum, Help, Monitor, Memory, SettingsApplications, Timeline , VideogameAsset, House } from '@mui/icons-material';
import {  Link  } from "react-router-dom";

const Sidebar = ({page,role}) => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarGroup">
                    <h3 className="sidebarGroupTitle">Tableau de bord</h3>
                    <ul className="sidebarList">
                        <Link to="/" >
                            <li id="home" className={`sidebarListItem ${page==="home" ? "active" : ""}`}>
                                <House /><p>Accueil</p>
                            </li>
                        </Link>
                        <li id="monitoring" className="sidebarListItem">
                            <Monitor/><p>Monitoring</p>
                        </li>
                        <li id="stats" className="sidebarListItem">
                            <Timeline/><p>Stats</p>
                        </li>
                        <Link to="/users">
                            <li id="user" className={`sidebarListItem ${page==="user" ? "active" : ""}`}>
                                <PeopleAlt/><p>Utilisateurs</p>
                            </li>
                        </Link>
                        <Link to="/games">
                            <li id="games" className={`sidebarListItem ${page==="games" ? "active" : ""}`}>
                                <VideogameAsset/><p>Jeux</p>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarGroup">
                    <h3 className="sidebarGroupTitle">Gestion du Serveur</h3>
                    <ul className="sidebarList">
                    <Link to="/Config">
                        <li className={`sidebarListItem ${page==="config" ? "active" : ""}`}>
                            <SettingsApplications /><p>Config</p>
                        </li>
                    </Link>

                    <Link to="/FTP">
                        <li className={`sidebarListItem ${page==="ftp" ? "active" : ""}`}>
                            <SettingsApplications /><p>Accès FTP</p>
                        </li>
                    </Link>
                        <li className="sidebarListItem">
                            <Memory/><p>Ressources</p>
                        </li>
                    </ul>
                </div>
                <div className="sidebarGroup">
                    <h3 className="sidebarGroupTitle">Support</h3>
                    <ul className="sidebarList">
                    <Link to="/bugReport">
                        <li className={`sidebarListItem ${page==="bugreport" ? "active" : ""}`}>
                            <BugReport /><p>Bug Report </p>
                        </li>
                    </Link>

                        <li className="sidebarListItem">
                            <Help/><p>FAQ</p> 
                        </li>
                        <li className="sidebarListItem">
                            <Forum/><p>Forum</p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        
       
    )
}

export default Sidebar;