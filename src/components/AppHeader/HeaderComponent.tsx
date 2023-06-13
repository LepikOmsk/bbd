import React from 'react'

//styles
import styles from "../AppHeader/AppHeader.module.css";

type THeaderComponent = {
  text: string;
};

const HeaderComponent: React.FC <THeaderComponent> = (text) => {
  return (
    <div>HeaderComponent</div>
  )
}

export default HeaderComponent