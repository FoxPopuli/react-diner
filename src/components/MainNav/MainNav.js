import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import DinerLogo from "../DinerLogo/DinerLogo";
import NavDropdown from "../NavDropdown/NavDropdown";
const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <h3 className={classes.logo}>
        <Link to="/react-diner">
          <DinerLogo />
        </Link>
      </h3>
      <ul className={classes.list}>
        <li className={classes.headerLinks}>
          <Link to="/react-diner/about">About</Link>
        </li>
        <li className={classes.headerLinks}>
          <NavDropdown
            title="Our Menus"
            options={[
              {
                value: "Main Menu",
                link: "/react-diner/main-menu",
              },
              {
                value: "Sushi Menu",
                link: "/react-diner/sushi-menu",
              },
            ]}
          />
        </li>
        <li className={classes.headerLinks}>
          <Link to="/react-diner/reservations">Reservations</Link>
        </li>
        <li className={classes.headerLinks}>
          <Link to="/react-diner/contact">Contact</Link>
        </li>
      </ul>
      <SocialLinks />
    </nav>
  );
};

export default MainNav;
