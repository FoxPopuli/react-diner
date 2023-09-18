import classes from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";
const Menu = (props) => {
  const items = [
    {
      title: "Menu Item 1",
      description: "Steam grilled air.",
      price: 120,
    },
    {
      title: "Menu Item 2",
      description: "Flame charred wonder.",
      price: 150,
    },
    {
      title: "Menu Item 3",
      description: "Deep fried hopes with a side of dreams.",
      price: 150,
    },
  ];
  return (
    <div className={classes.menu}>
      <h2 className={classes.titleElement}>
        <span className={classes.menuTitle}>QUACKIDO</span>
        <span className={classes.separator}>|</span>
        <span className={classes.subTitle}>SMALL DISHES</span>
      </h2>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        imperdiet purus non massa rhoncus consequat. Sed eget aliquam diam, in
        viverra magna. Proin pulvinar dignissim ornare. Ut tortor eros, suscipit
        vel diam ut, sodales luctus elit.
      </p>
      <ul className={classes.menuItems}>
        {items.map((item) => {
          return (
            <MenuItem
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
