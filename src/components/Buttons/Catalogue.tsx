import React from "react";
import styles from "../../styles/Catalogue.module.css"
import catalogIcon from "../../assets/icons/catalog.svg"

const Catalogue = () => {
  return (
    <>
        <button className={styles["catalog-button"]}>
          <img src={catalogIcon} alt="" width={24} color="white"/>
          <span>Kataloq</span>
        </button>
    </>
  );
};

export default Catalogue;
