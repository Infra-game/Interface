import "./widgetSm.css"
import { Visibility } from "@mui/icons-material"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New join Member</span>
            <ul className="widgetSmlist">
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Brigitte cronMa</span>
                        <span className="widgetSmUserTitle">Last Lady</span>
                    </div>
                    
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>

                </li>

                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Brigitte cronMa</span>
                        <span className="widgetSmUserTitle">Last Lady</span>
                    </div>
                    
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>

                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Brigitte cronMa</span>
                        <span className="widgetSmUserTitle">Last Lady</span>
                    </div>
                    
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>

                </li>
                
            </ul>
        </div>
    )
}
