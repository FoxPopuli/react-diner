import classes from "./Modal.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
const SidebarModal = (props) => {
  return (
    <section
      className={`${classes.modal} ${props.isHidden ? classes.hidden : ""}`}
    >
      <div className={classes.spacer}></div>
      <Sidebar isHidden={isHidden} />
    </section>
  );
};

export default SidebarModal;
