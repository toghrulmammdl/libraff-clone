import React, { useEffect, useRef, useState } from 'react'
import styles from "../../styles/Profile.module.css"
const Profile = () => {
    const [opened, setOpened] = useState(false);
      const [selectedLang, setSelectedLang] = useState('AZ');
      const menuRef = useRef(null);
    
      const toggleDropdown = () => {
        setOpened(prev => !prev);
      };
      
      const handleSelect =(lang) => {
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
    <div className={styles["auth-menu"]}>
        Hesabım
    </div>
  )
}

export default Profile