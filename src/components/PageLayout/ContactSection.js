import { Link } from "react-router-dom";
import classes from "./ContactSection.module.css";
import ContactCard from "../ContactCard/ContactCard";

const ContactSection = () => {
  return (
    <section className={classes.main}>
      <div className={`${classes.group1}`}>
        <div className={classes.leftAlgin}>
          <h2>Details</h2>
        </div>
        <div className={`${classes.rightAlign}`}>
          <span>T: +27 82 000 0000</span>
          <span>E: manager@janesdiner.co.za</span>
        </div>
      </div>
      <div className={`${classes.group2}`}>
        <div className={classes.leftAlign}>
          <h2>Follow Us</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
        </div>
        <div className={classes.rightAlign}>
          <ContactCard />
        </div>
      </div>

      <div className={`${classes.group2}`}></div>
    </section>
  );
};

export default ContactSection;
