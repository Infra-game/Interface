import Chart from "../../component/chart/Chart"
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo"
import "./Home.css"
import { userData } from "../../dummyData"
import WidgetSm from "../../component/widgetSm/widgetSm"
import WidgetLg from "../../component/widgetLg/widgetLg"
import Sidebar from "../../component/sidebar/Sidebar"

export default function Home({userRole}){
    return(
        <div className="home">
            <Sidebar role={userRole} />
            <div className="content">
                <FeaturedInfo/>
                <Chart data={userData} title="User Analytics" grid dataKey="Usage"/>
                <div className="homeWidgets">
                    <WidgetSm/>
                    <WidgetLg/>
                </div>
            </div>
        </div>
    )
}