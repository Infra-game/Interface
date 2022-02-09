import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Topbar from '../component/Topbar';

const Dashboard = ({Page,pageName}) => {
    const [darkmode, setDarkmode] = useState(false);
    
    return (
        <div className={`dashboard ${darkmode ? "darkmode" : ""}`}>
            <Topbar darkmode={darkmode} setDarkmode={() => setDarkmode(!darkmode)}/>
            <div className="page-content">
                <Sidebar page={pageName} />
                <Page/>
            </div>
        </div>
    );
};

export default Dashboard;