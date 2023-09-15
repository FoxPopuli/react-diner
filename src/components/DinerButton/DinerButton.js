import classes from "./DinerButton.module.css";
const DinerButton = (props) => {
  const clickHanlder = () => props.onClick();
  return (
    <div className={classes.dinerButton} onClick={clickHanlder}>
      {props.text}
    </div>
  );
};

export default DinerButton;
