import classes from "./Greeter.module.css";
import DinerButton from "../DinerButton/DinerButton";

const Greeter = () => {
  const clickHanlder = () => {
    console.log("Clicked!");
  };
  return (
    <div className={classes.greeterMain}>
      <h1>Flavor, Precision and Perfection</h1>
      <h2>We are Jane Doe's Diner and we serve food and drinks</h2>
      <div className={classes.buttonContainer}>
        <DinerButton text="VIEW MAIN MENU" onClick={clickHanlder} />
        <DinerButton text="ORDER ONLINE" onClick={clickHanlder} />
      </div>
    </div>
  );
};

export default Greeter;
