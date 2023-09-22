import classes from "./ContactCard.module.css";
const ContactCard = () => {
  return (
    <div className={classes.main}>
      <h2>Trading Hours</h2>
      <p>
        <span>Sunday to Thursday</span>
        <span>Friday & Saturday</span>
      </p>
      <p>
        <span>11:00AM - 21:00PM</span>
        <span>11:00AM - 22:00PM</span>
      </p>
    </div>
  );
};

export default ContactCard;
