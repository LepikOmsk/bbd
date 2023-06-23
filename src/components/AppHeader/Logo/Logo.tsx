import React from "react";
import logo from "../../../images/logo-BBD2.png";

import styles from "../Logo/Logo.module.css";

interface ILogo {
  extraClass?: string;
}

const Logo: React.FC<ILogo> = ({extraClass}) => {
  return <img className={`${styles.img} ${extraClass ?? ''}`} src={logo} alt="Логотип компании" />;
};

export default Logo;
