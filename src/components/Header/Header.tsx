import React from 'react'
import styles from "../../styles/Header.module.css"
import logoLibraff from "../../assets/images/logo.png"
import Catalogue from '../Buttons/Catalogue'
import SearchBar from '../Forms/SearchBar'
import LanguageSelection from '../Dropdown/LanguageSelection'
import Profile from '../Dropdown/Profile'
import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";


const Header = () => {
  return (
    <header>
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logoLibraff} alt="Libraff logo" className={styles.logo}/>
            </div>
            <div><Catalogue /></div>
            <div><SearchBar /></div>
            <div><LanguageSelection /></div>
            <div><Profile /></div>
            <div><FaRegHeart style={{fontSize: "24px"}}/></div>
            <div><BsBasket3 style={{fontSize: "24px"}}/></div>
        </div>
        <div className={styles.bottomNavbar}>
            <div>Bestseller</div>
            <div>Endirimler</div>
            <div>Muellifler</div>
            <div>Klassikler</div>
            <div>Odenisler ve catdirilma</div>
            <div>Loyalliq karti</div>
            <div>FAQ</div>
            <div>Elaqe</div>
        </div>
    </header>
  )
}

export default Header
