import classes from "./MainMenuSection.module.css";
import menuData from "../../data/menuData";
import Menu from "../Menu/Menu";
import { useEffect, useState } from "react";

const MenuSection = () => {
  let count1 = 0;
  let count2 = 10;

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <section className={classes.main}>
      <h1 className={`${classes.title} ${!isFirstLoad ? classes.loaded : ""}`}>
        Main Menu
      </h1>
      <div className={classes.columnContainer}>
        <div
          className={`${classes.leftColumn} ${
            !isFirstLoad ? classes.loaded : ""
          }`}
        >
          {menuData.map((menu) => {
            count1++;
            const generatedClass = "item" + count1;
            if (count1 % 2 === 0) {
              return (
                <div className={classes[generatedClass]}>
                  <Menu
                    title={menu.title}
                    subTitle={menu.subTitle}
                    description={menu.description}
                    items={menu.items}
                    key={count1}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div
          className={`${classes.rightColumn} ${
            !isFirstLoad ? classes.loaded : ""
          }`}
        >
          {menuData.map((menu) => {
            count2++;
            if (count2 % 2 !== 0) {
              return (
                <Menu
                  title={menu.title}
                  subTitle={menu.subTitle}
                  description={menu.description}
                  items={menu.items}
                  key={count2}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
