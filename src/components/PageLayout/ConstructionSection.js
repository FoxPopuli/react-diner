import classes from "./ConstructionSection.module.css";
import { useState, useEffect } from "react";

const ConstructionSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={classes.main}>
      <h1 className={`${classes.heading} ${isLoaded ? classes.loaded : ""}`}>
        Under Construction
      </h1>
      <h2 className={`${classes.subHeading} ${isLoaded ? classes.loaded : ""}`}>
        ...For now
      </h2>
    </section>
  );
};

export default ConstructionSection;
