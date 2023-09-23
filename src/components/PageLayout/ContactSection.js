import { Link } from "react-router-dom";
import classes from "./ContactSection.module.css";
import ContactCard from "../ContactCard/ContactCard";

const ContactSection = () => {
  return (
    <section className={classes.main}>
      <div className={`${classes.leftColumn}`}>
        <div className={`${classes.group1}`}>
          <h2>Contact</h2>
          <p className={`${classes.location}`}></p>
        </div>
        <div className={`${classes.group2}`}>
          <h2>Follow Us</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
        </div>
      </div>
      <div className={`${classes.rightColumn}`}>
        <div className={`${classes.group1}`}>
          <span>T: +27 82 000 0000</span>
          <span>E: manager@janesdiner.co.za</span>
        </div>

        <div className={`${classes.group2}`}>
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
