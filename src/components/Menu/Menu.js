import classes from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";
const Menu = (props) => {
  let count = 0;
  return (
    <div className={classes.menu}>
      <h2 className={classes.titleElement}>
        <span className={classes.menuTitle}>{props.title}</span>
        <span className={classes.separator}>|</span>
        <span className={classes.subTitle}>{props.subTitle}</span>
      </h2>
      <p className={classes.description}>{props.description}</p>
      <ul className={classes.menuItems}>
        {props.items.map((item) => {
          count++;
          return (
            <MenuItem
              title={item.title}
              description={item.description}
              price={item.price}
              key={count}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
