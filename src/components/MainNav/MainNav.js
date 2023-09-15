import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3 className={classes.logo}>Jane's Diner</h3>
      <ul className={classes.list}>
        <li className={classes.headerLinks}>
          <Link to="/">Item 1</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/">Item 2</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/">Item 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
