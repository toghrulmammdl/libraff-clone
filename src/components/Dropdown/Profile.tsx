import React, { useEffect, useRef, useState } from 'react'
import styles from "../../styles/Profile.module.css"

import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

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
        <FaRegCircleUser /><span>Hesabım</span><IoIosArrowDown />
    </div>
  )
}

export default Profile
