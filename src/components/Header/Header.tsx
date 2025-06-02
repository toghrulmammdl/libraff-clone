import React from 'react'
import styles from "../../styles/Header.module.css"
import logoLibraff from "../../assets/images/logo.png"
import Catalogue from '../Buttons/Catalogue'
import SearchBar from '../Forms/SearchBar'
import LanguageSelection from '../Dropdown/LanguageSelection'
import Profile from '../Dropdown/Profile'

const Header = () => {
  return (
    <header>
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logoLibraff} alt="" className={styles.logo}/>
            </div>
            <div><Catalogue /></div>
            <div><SearchBar /></div>
            <div><LanguageSelection /></div>
            <div><Profile /></div>
            <div>WHISHLIST</div>
            <div>CART</div>
        </div>
        <div className='bottom'>
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