import "./Sidebar.css";
import { PeopleAlt,BugReport, Forum, Help, LineStyle, Memory, Monitor, SettingsApplications, Timeline , VpnKey, VideogameAsset } from '@mui/icons-material';
import {  Link  } from "react-router-dom";

export default function Sidebar({role}) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Dashboard </h3>
                    <ul className="sidebarList">
                        <Link to="/" >
                            <li className="sidebarListItem">
                                <LineStyle /> 
                                Acceuil 
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Monitor/> 
                            Monitoring
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/> 
                            Stats
                        </li>
                        {role==="admin" && <Link to="/users">
                            <li className="sidebarListItem">
                                <PeopleAlt/> 
                                Utilisateur
                            </li>
                        </Link>}
                        <Link to="/games">
                            <li className="sidebarListItem">
                                <VideogameAsset/> 
                                Jeux
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Gestion du Serveur </h3>
                    <ul className="sidebarList">
                    <Link to="/Config">
                        <li className="sidebarListItem">
                            <SettingsApplications /> 
                            Config
                        </li>
                    </Link>

                    <Link to="/FTP">
                        <li className="sidebarListItem">
                            <SettingsApplications /> 
                            Acces FTP
                        </li>
                    </Link>
                        <li className="sidebarListItem">
                            <Memory/> 
                            Ressources
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Support </h3>
                    <ul className="sidebarList">
                    <Link to="/bugReport">
                        <li className="sidebarListItem">
                            <BugReport /> 
                            Bug Report 
                        </li>
                    </Link>

                        <li className="sidebarListItem">
                            <Help/> 
                            FAQ 
                        </li>
                        <li className="sidebarListItem">
                            <Forum/> 
                            Forum
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        
       
    )
}
