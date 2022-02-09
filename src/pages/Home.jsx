import {DummyWidget} from "../component/Widgets"

const Home = ({userRole}) => {
    return(
        <div className="home">
            <div className="banner">
                <h1>Hello Devs !</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </div>
            <div className="content">
                <div className="widget-row">
                    <DummyWidget size='15'/>
                    <DummyWidget size='30'/>
                    <DummyWidget size='30'/>
                </div>
                <div className="widget-row">
                    <DummyWidget size='90'/>
                </div>
            </div>
        </div>
    )
}

export default Home;