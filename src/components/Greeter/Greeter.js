import classes from "./Greeter.module.css";
import DinerButton from "../DinerButton/DinerButton";
import { useEffect, useState } from "react";
const Greeter = () => {
  const clickHanlder = () => {
    console.log("Clicked!");
  };

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   console.log("Hi");
    //   setIsFirstLoad(false);
    // }, 50);
    setIsFirstLoad(false);
  }, []);

  return (
    <div
      className={`${classes.greeterMain} ${!isFirstLoad ? classes.loaded : ""}`}
    >
      <h1 className={`${classes.item1} ${!isFirstLoad ? classes.loaded : ""}`}>
        Flavor, Precision and Perfection
      </h1>
      <h2 className={`${classes.item2} ${!isFirstLoad ? classes.loaded : ""}`}>
        We are Jane Doe's Diner and we serve food and drinks
      </h2>
      <div
        className={`${classes.buttonContainer} ${classes.item3} ${
          classes.item3
        } ${!isFirstLoad ? classes.loaded : ""}`}
      >
        <DinerButton text="VIEW MAIN MENU" onClick={clickHanlder} />
        <DinerButton text="ORDER ONLINE" onClick={clickHanlder} />
      </div>
    </div>
  );
};

export default Greeter;
