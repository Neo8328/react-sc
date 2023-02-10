import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faBars} from "@fortawesome/free-solid-svg-icons";
import classes from './Header.module.css';

export default function Header(props) {

 
  return (
    <div className={classes.Header}>
      <div className={classes.InputOuter}>
        <input 
          className={classes.SearchInput} 
          type="text" 
          placeholder={"please input keywords"}
          
        />  
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}></FontAwesomeIcon>
      </div>
      <div className={classes.MenuIcon}>
        <FontAwesomeIcon onClick={()=>props.onShow()} className={classes.SearchIcon} icon={faBars}></FontAwesomeIcon>
      </div>
    </div>
  )
}
