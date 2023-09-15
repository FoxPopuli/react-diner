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
        <DinerButton text="Button 1" onClick={clickHanlder} />
        <DinerButton text="Button 2" onClick={clickHanlder} />
      </div>
    </div>
  );
};

export default Greeter;
