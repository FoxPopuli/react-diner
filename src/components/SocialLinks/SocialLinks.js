import classes from "./SocialLinks.module.css";
import { Link } from "react-router-dom";
import fbIcon from "../../img/fb-icon.svg";
import instaIcon from "../../img/insta-icon.svg";
import burgerIcon from "../../img/menu-icon.svg";
import { useContext } from "react";
import ModalContext from "../../store/ModalContext";

const SocialLinks = () => {
  const ctx = useContext(ModalContext);
  const burgerClickHandler = () => {
    ctx.openSidebar();
  };
  return (
    <ul className={classes.iconContainer}>
      <li>
        <Link to="/">
          <img
            src={fbIcon}
            className={classes.invert}
            alt="Facebook Link"
          ></img>
        </Link>
      </li>
      <li>
        <Link to="/">
          <img
            src={instaIcon}
            className={classes.invert}
            alt="Instagram Link"
          ></img>
        </Link>
      </li>
      <li>
        {/* <Link to="/"> */}
        <img
          src={burgerIcon}
          className={`${classes.invert} ${classes.menu}`}
          alt="Menu"
          onClick={burgerClickHandler}
        ></img>
        {/* </Link> */}
      </li>
    </ul>
  );
};

export default SocialLinks;
