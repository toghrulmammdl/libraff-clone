import React from 'react'
import { BsSearch } from "react-icons/bs";
import styles from "../../styles/Search.module.css"

const SearchBar = () => {
  return (
    <>

      <form className={styles["searchContainer"]}>
        <input
          type="search"
          name="search"
          id="search-input"
          placeholder='Növbəti Kitabınızı Axtarın'
          className={styles["searchInput"]}
        />
        <button
          type="submit"
          title='Axtar'
          className={styles["searchIcon"]}
        >
            <BsSearch />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
