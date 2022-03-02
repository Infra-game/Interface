import React from 'react';
import {useHistory} from "react-router-dom";
import Login from '../component/Login';
import Register from '../component/Register';

const Registerlogin = ({type}) => {
    let history = useHistory();

    const changeType = (newType) => {
        history.push("/"+newType);
    }
    return (
        <div className='registerlogin'>
            <div className="side">
                {type==="login" ?
                <Login changeType={() => changeType("register")} />
                : <div className="hidden"></div>
                }
            </div>
            <div className="side">
                 {type==="register" ?
                 <Register changeType={() => changeType("login")} />
                : <div className="hidden"></div>
                }
            </div>
        </div>
    );
};

export default Registerlogin;