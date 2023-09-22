import classes from "./ReservationsSection.module.css";
import ContactCard from "../ContactCard/ContactCard";
import { useEffect, useState } from "react";

const ReservationsSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={classes.main}>
      <h1>Reservations</h1>
      <div className={classes.columnContainer}>
        <div
          className={`${classes.leftColumn} ${isLoaded ? classes.loaded : ""}`}
        >
          <h2>
            "Perfection is a lot of little things done right" - Marco Pierre
            White
          </h2>
          <h3>Reserve by Phone</h3>
          <p>
            To ensure that we can discuss your booking and seating requirements
            to ensure they are to your liking, please call us on 0877112001
            between 11:00 am – 21:00 pm, Monday to Sunday.
          </p>
        </div>
        <div
          className={`${classes.rightColumn} ${isLoaded ? classes.loaded : ""}`}
        >
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default ReservationsSection;
