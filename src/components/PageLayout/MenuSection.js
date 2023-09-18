import classes from "./MenuSection.module.css";
import menuData from "../../data/menuData";
import Menu from "../Menu/Menu";

const MenuSection = () => {
  let count1 = 0;
  let count2 = 2;
  return (
    <section className={classes.main}>
      <h1>Menu</h1>
      <div className={classes.menuContainer}>
        <div className={classes.leftColumn}>
          {menuData.map((menu) => {
            count1++;
            if (count1 % 2 === 0) {
              return (
                <Menu
                  title={menu.title}
                  subTitle={menu.subTitle}
                  description={menu.description}
                  items={menu.items}
                  key={count1}
                />
              );
            }
            return null;
          })}
        </div>
        <div className={classes.rightColumn}>
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
