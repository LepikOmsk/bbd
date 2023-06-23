import React from "react";
import styles from "../AppHeader/AppHeader.module.css";
import ComponentWithDropDown from "./HeaderComponent/ComponentWithDropDown";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import Logo from "./Logo/Logo";

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo extraClass={styles.logo} />

      <nav className={styles.headerNav}>
        <HeaderComponent text="О компании" path="/company" />
        <HeaderComponent text="Производители" path="/brands" />
        <ComponentWithDropDown
          text="Производители"
          path1="/brands"
          path2="/certificates"
          path3="/company"
        />
        <HeaderComponent text="Сертификаты" path="/certificates" />
        <HeaderComponent text="Уставные" path="/brands" />
        <HeaderComponent text="Уставные" path="/brands" />
      </nav>
    </header>
  );
};

export default AppHeader;
