import { Link } from "react-router-dom";
import classes from "./ContactSection.module.css";
import ContactCard from "../ContactCard/ContactCard";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={classes.main}>
      <div className={`${classes.group1} ${isLoaded ? classes.loaded : ""}`}>
        <div
          className={`${classes.leftAlign} ${isLoaded ? classes.loaded : ""}`}
        >
          <h2>Details</h2>
        </div>
        <div
          className={`${classes.rightAlign} ${isLoaded ? classes.loaded : ""}`}
        >
          <span>T: +27 82 000 0000</span>
          <span>E: manager@janesdiner.co.za</span>
        </div>
      </div>
      <div className={`${classes.group2} ${isLoaded ? classes.loaded : ""}`}>
        <div
          className={`${classes.leftAlign} ${isLoaded ? classes.loaded : ""}`}
        >
          <h2>Follow Us</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
        </div>
        <div
          className={`${classes.rightAlign} ${isLoaded ? classes.loaded : ""}`}
        >
          <ContactCard />
        </div>
      </div>

      <div
        className={`${classes.group2} ${isLoaded ? classes.loaded : ""}`}
      ></div>
    </section>
  );
};

export default ContactSection;
