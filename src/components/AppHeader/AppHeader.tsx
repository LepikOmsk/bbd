import React from "react";
import styles from "../AppHeader/AppHeader.module.css";

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>1</nav>
      </div>
    </header>
  );
};


export default AppHeader;
