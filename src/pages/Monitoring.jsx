import React from 'react';
import { CPUWidget, LoadWidget, RAMWidget } from '../component/Widgets';

const Monitoring = () => {
    return (
        <div className='page monitoring'>
            <div className="widget-row">
                <LoadWidget size={"60"}/>
            </div>
            <div className="widget-row">
                <RAMWidget size={"60"}/>
            </div>
            <div className="widget-row">
                <CPUWidget size={"60"}/>
            </div>
        </div>
    );
};

export default Monitoring;