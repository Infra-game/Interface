import {LoadWidget} from "../component/Widgets"


/**
 * Home page 
 * @param { object } user 
 * @returns { HTMLElement }
 */
const Home = ({user}) => {
    return(
        <div className="page home">
            <div className="widget-row">
                <LoadWidget size='70'/>
            </div>
        </div>
    )
}

export default Home;