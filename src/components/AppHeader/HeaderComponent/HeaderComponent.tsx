import React from "react";
import { NavLink } from "react-router-dom";

//styles
import styles from "./HeaderComponent.module.css";

type THeaderComponent = {
  text: string;
  path: string;
};

const HeaderComponent: React.FC<THeaderComponent> = ({ text, path }) => {
  return (
    <NavLink className={styles.link} to={path}>
      <p>{text}</p>
    </NavLink>
  );
};

export default HeaderComponent;
