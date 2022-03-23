import {LoadWidget} from "../component/Widgets"


/**
 * Home page 
 * @param { string } userRole 
 * @returns { HTMLElement }
 */
const Home = ({userRole}) => {
    return(
        <div className="page home">
            <div className="widget-row">
                <LoadWidget size='70'/>
            </div>
        </div>
    )
}

export default Home;