import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Topbar from '../component/Topbar';

const Dashboard = ({Page,pageName}) => {
    const [darkmode, setDarkmode] = useState(false);
    
    const getTitle = (pageName) => {
      let title;
      switch (pageName) {
          case "home":
              title = "Accueil"
              break;
          case "user":
              title = "Utilisateurs"
              break;
          case "games":
              title = "Jeux"
              break;
          case "config":
              title = "Config"
              break;
          case "ftp":
              title = "FTP"
              break;
          case "bugreport":
              title = "Bug Report"
              break;
          default:
              break;
      }
      return title;
    }

    return (
        <div className={`dashboard ${darkmode ? "darkmode" : ""}`}>
            <Topbar darkmode={darkmode} setDarkmode={() => setDarkmode(!darkmode)}/>
            <div className="content">
                <Sidebar page={pageName} />
                <div className="page-content">
                    <div className="banner">
                        <h1>{getTitle(pageName)}</h1>
                    </div>
                    <Page/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;