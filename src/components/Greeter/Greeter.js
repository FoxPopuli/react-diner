import classes from "./Greeter.module.css";
import DinerButton from "../DinerButton/DinerButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Greeter = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const navigate = useNavigate();

  const menuClickHanlder = () => navigate("/main-menu");
  const sushiMenuClickHandler = () => navigate("/sushi-menu");

  useEffect(() => setIsFirstLoad(false), []);

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
        <DinerButton text="VIEW MAIN MENU" onClick={menuClickHanlder} />
        <DinerButton text="VIEW SUSHI MENU" onClick={sushiMenuClickHandler} />
      </div>
    </div>
  );
};

export default Greeter;
