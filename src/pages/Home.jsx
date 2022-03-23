import {LoadWidget} from "../component/Widgets"

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