import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis ,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//Usage de la librairie Recharts pour crée des graphs

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}