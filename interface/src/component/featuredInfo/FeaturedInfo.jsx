import "./featuredInfo.css";
//import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">CPU</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">70%</span>
          <Stack className="circularProgress">
            <CircularProgress variant="determinate" thickness={22} size={70} value={75} />
          </Stack>
        </div>
        <span className="featuredSub">Derniere mesure : </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">RAM</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">80%</span>
          <Stack className="circularProgress">
            <CircularProgress variant="determinate"  thickness={22} size={80}   value={75} />
          </Stack>
        </div>
        <span className="featuredSub">Derniere mesure :</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Stockage</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10%</span>
          <Stack  className="circularProgress">
            <CircularProgress variant="determinate" thickness={22} size={70} value={10} />
          </Stack>
        </div>
        <span className="featuredSub">Derniere mesure :</span>
      </div>
    </div>
  );
}
