import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import DinerLogo from "../DinerLogo/DinerLogo";
const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3 className={classes.logo}>
        <Link to="/">
          <DinerLogo />
        </Link>
      </h3>
      <ul className={classes.list}>
        <li className={classes.headerLinks}>
          <Link to="/about">About</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/menu">Our Menus</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <SocialLinks />
    </nav>
  );
};

export default MainNav;
