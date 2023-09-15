import classes from "./SocialLinks.module.css";
import { Link } from "react-router-dom";
import fbIcon from "../../img/fb-icon.svg";
import instaIcon from "../../img/insta-icon.svg";

const SocialLinks = () => {
  return (
    <ul className={classes.iconContainer}>
      <li>
        <Link to="/">
          <img src={fbIcon} className={classes.invert}></img>
        </Link>
      </li>
      <li>
        <Link to="/">
          <img src={instaIcon} className={classes.invert}></img>
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
