import "./Sidebar.css";
import { PeopleAlt,BugReport, Forum, Help, LineStyle, Memory, Monitor, SettingsApplications, Timeline , VpnKey } from '@mui/icons-material';
import {  Link  } from "react-router-dom";

export default function Sidebar() {
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
                        <Link to="/users">
                            <li className="sidebarListItem">
                                <PeopleAlt/> 
                                Utilisateur
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Gestion du Serveur </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <SettingsApplications /> 
                            Config
                        </li>
                        <li className="sidebarListItem">
                            <VpnKey/> 
                            Accès ftp
                        </li>
                        <li className="sidebarListItem">
                            <Memory/> 
                            Ressources
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Support </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BugReport /> 
                            Bug Report 
                        </li>
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
