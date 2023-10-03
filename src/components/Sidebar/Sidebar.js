import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <nav
      className={`${classes.sidebar} ${
        props.isHidden ? classes.hidden : classes.show
      }`}
    >
      <ul>
        <li>
          <Link to="/react-diner/about">About</Link>
        </li>
        <li>
          <Link to="/react-diner/main-menu">Main Menu</Link>
        </li>
        <li>
          <Link to="/react-diner/sushi-menu">Sushi Menu</Link>
        </li>
        <li>
          <Link to="/react-diner/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/react-diner/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
