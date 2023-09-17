import classes from "./AboutSection.module.css";
import { useState, useEffect } from "react";
const AboutSection = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);
  return (
    <section className={classes.main}>
      <h1 className={`${classes.item1} ${!isFirstLoad ? classes.loaded : ""}`}>
        About
      </h1>
      <p className={`${classes.item2} ${!isFirstLoad ? classes.loaded : ""}`}>
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
      <p className={`${classes.item3} ${!isFirstLoad ? classes.loaded : ""}`}>
        Aenean vitae venenatis ligula. Curabitur nec nulla faucibus diam
        elementum luctus. Morbi hendrerit ante sit amet nibh cursus dapibus.
        Vestibulum accumsan eleifend diam et tempor. Praesent vel lorem at nisi
        gravida tincidunt vitae nec risus. Curabitur ornare felis eros, in
        auctor libero rhoncus ac. Praesent blandit tortor a mattis congue. Sed
        vehicula arcu vel sem elementum, sed malesuada nisl pulvinar. Quisque
        maximus varius velit sed maximus. In vitae lacus cursus, tristique urna
        sed, posuere elit. Nam et eros varius purus finibus dictum eu ac erat.
        Suspendisse sollicitudin dictum dolor, vel mattis tellus venenatis eu.
        Sed hendrerit et arcu sit amet luctus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam pulvinar volutpat massa vitae
        consequat.
      </p>
      <p className={`${classes.item4} ${!isFirstLoad ? classes.loaded : ""}`}>
        Pellentesque vel velit sagittis, ultricies mi ac, ullamcorper mi.
        Quisque congue ante magna, sed pulvinar enim pulvinar in. Ut varius
        metus arcu, sed porta nisl pulvinar vel. In pulvinar metus nec libero
        iaculis, ac lobortis metus convallis. Nullam nec volutpat neque.
        Praesent tristique orci est, non commodo tortor dignissim ut. Aenean
        tempor pharetra metus, quis elementum ligula commodo id. Aenean congue
        et quam quis condimentum. Morbi aliquam sem sit amet tincidunt aliquet.
        Nunc suscipit in metus eget gravida.
      </p>
    </section>
  );
};

export default AboutSection;
