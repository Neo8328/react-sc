import React from 'react';
import classes from './Header.module.css';
import logo from '../../../asset/imgs/logo-white.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faSearch, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import Notice from './Notice';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <div>
      <div className={classes.Header}>
        <div className={classes.LogoBox}>
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
        </div>
        <div className={classes.InputOuter}>
          <input className={classes.SearchInput} type="text" name="s" placeholder="輸入品牌或產品名稱" />
          <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}/>
        </div>
        <div className={classes.LoginOuter}>
          <NavLink to="/">用戶登入</NavLink>
        </div>
        <div className={classes.CartOuter}>
          <FontAwesomeIcon icon={faCartShopping}/>
        </div>
      </div>
      <Notice/>
      <Navbar />
    </div>
    
  )
}
