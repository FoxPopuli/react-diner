import classes from "./Menu.module.css";
const Menu = (props) => {
  const items = [
    {
      title: "Menu Item 1",
      description: "Steam grilled wank",
      price: 120,
    },
    {
      title: "Menu Item 2",
      description: "Flame charred wank",
      price: 150,
    },
    {
      title: "Menu Item 3",
      description: "Deep fried wank",
      price: 150,
    },
  ];
  return (
    <div className={classes.menu}>
      <div>
        <h2 className={classes.menuTitle}>QAUCKIDO</h2>
        <h3 className={classes.subTitle}>SMALL DISHES</h3>
      </div>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        imperdiet purus non massa rhoncus consequat. Sed eget aliquam diam, in
        viverra magna. Proin pulvinar dignissim ornare. Ut tortor eros, suscipit
        vel diam ut, sodales luctus elit. Ut pellentesque purus bibendum, cursus
        risus vel, dapibus diam. Integer iaculis dictum est, maximus finibus
        enim bibendum sit amet. Morbi nec ligula quis ipsum egestas pharetra
        eget sit amet augue. Donec convallis porttitor accumsan. Nulla
        sollicitudin lectus faucibus sem commodo pulvinar. Fusce pulvinar eu
        dolor et eleifend.
      </p>
      <ul className={classes.menuItems}>
        {items.map((item) => {
          return <div></div>;
        })}
      </ul>
    </div>
  );
};
