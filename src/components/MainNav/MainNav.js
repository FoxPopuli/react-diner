import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3 className={classes.logo}>Jane's Diner</h3>
      <ul className={classes.list}>
        <li className={classes.headerLinks}>
          <Link to="/">About</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/">Our Menus</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/">Reservations</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
