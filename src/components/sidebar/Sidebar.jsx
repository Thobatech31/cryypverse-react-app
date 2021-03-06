import "./sidebar.css";
import {
  LineStyle,
  Storefront,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/cryptocurrency" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Cryptocurrencies
            </li>
            </Link>
          <li className="sidebarListItem">
            <AttachMoney className="sidebarIcon" />
            Exchanges
          </li>
            <Link to="/news" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                News
              </li>
            </Link>
          </ul>
        </div>
        </div>
    </div>
  );
}
