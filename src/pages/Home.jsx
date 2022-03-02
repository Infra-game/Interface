import {DummyWidget} from "../component/Widgets"


/**
 * Home page 
 * @param { string } userRole 
 * @returns { HTMLElement }
 */
const Home = ({userRole}) => {
    return(
        <div className="page home">
            <div className="widget-row">
                <DummyWidget size='15'/>
                <DummyWidget size='30'/>
                <DummyWidget size='30'/>
            </div>
            <div className="widget-row">
                <DummyWidget size='90'/>
            </div>
        </div>
    )
}

export default Home;