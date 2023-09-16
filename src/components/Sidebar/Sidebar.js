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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Our Menus</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
