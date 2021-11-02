import Chart from "../../component/chart/Chart"
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo"
import "./Home.css"
import { userData } from "../../dummyData"

export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    )
}