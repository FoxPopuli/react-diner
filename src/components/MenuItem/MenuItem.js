import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={classes.menuItem}>
      <div className={classes.leftGroup}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <p>{`R${props.price}`}</p>
    </li>
  );
};

export default MenuItem;
