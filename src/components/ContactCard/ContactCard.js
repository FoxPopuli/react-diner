import classes from "./ContactCard.module.css";
const ContactCard = () => {
  return (
    <div className={classes.main}>
      <h2>Trading Hours</h2>
      <p className={classes.tradingHourGroup}>
        <span>Sunday to Thursday</span>
        <span>Friday & Saturday</span>
      </p>
      <p className={classes.tradingHourGroup}>
        <span>11:00AM - 21:00PM</span>
        <span>11:00AM - 22:00PM</span>
      </p>
      <h2>Location</h2>
      <p className={classes.location}>Restuarant at the End of the Universe</p>
    </div>
  );
};

export default ContactCard;
