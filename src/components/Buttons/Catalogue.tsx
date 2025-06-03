import React from "react";
import styles from "../../styles/Catalogue.module.css"
import catalogIcon from "../../assets/icons/catalog.svg"

const Catalogue = () => {
  return (
    <>
        <button className={styles["catalog-button"]}>
          <img src={catalogIcon} alt="kataloq" className={styles["catalog-icon"]} color="white"/>
          <span>Kataloq</span>
        </button>
    </>
  );
};

export default Catalogue;
