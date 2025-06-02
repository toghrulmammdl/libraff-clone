import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import styles from "../../styles/Dropdown.module.css"
const LanguageSelection = () => {
  const [opened, setOpened] = useState(false);
  const [selectedLang, setSelectedLang] = useState('AZ');
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setOpened(prev => !prev);
  };
  
  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpened(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles["dropdown"]}>
      <button
        onClick={toggleDropdown}
         className={styles["language-dropdown"]}
      >
        <span>{selectedLang}</span>
        <IoIosArrowDown />
      </button>

      {opened && (
        <ul className={styles["dropdown-menu"]} >
          {['AZ', 'RU', 'EN'].map((lang) => (
            <li
              key={lang}
              onClick={() => handleSelect(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelection;