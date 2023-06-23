import React from "react";
import { NavLink } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";

//styles
import styles from "./ComponentWithDropDown.module.css";

type THeaderComponent = {
  text: string;
  path1: string;
  path2: string;
  path3: string;
};

const ComponentWithDropDown: React.FC<THeaderComponent> = ({ text, path1, path2, path3}) => {
  return (
    <div className={styles.dropdown}>
    <button className={styles.dropbtn}>{text} 
      <i className="fa fa-caret-down"></i>
      <BiCaretDown />
    </button>
    <div className={styles.dropdown_content}>
      <NavLink to={path1}>Link 1</NavLink>
      <NavLink to={path2}>Link 2</NavLink>
      <NavLink to={path3}>Link 3</NavLink>
    </div>
  </div> 

  );
};

export default ComponentWithDropDown;
