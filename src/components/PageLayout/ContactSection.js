import { Link } from "react-router-dom";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={classes.main}>
      <div className={`${classes.leftColumn}`}>
        <div className={`${classes.contact}`}>
          <h2>Contact</h2>
          <p className={`${classes.location}`}></p>
        </div>
        <div className={`${classes.follow}`}>
          <h2>Follow Us</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
        </div>
      </div>
      <div className={`${classes.rightColumn}`}>
        <span>T: +27 82 000 0000</span>
        <span>E: manager@janesdiner.co.za</span>
        <div className={classes.tradingHours}>
          <div>
            <span>Sunday to</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
