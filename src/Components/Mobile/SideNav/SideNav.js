import React from 'react';
import classes from './SideNav.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';


export default function SideNav(props) {

  
  return (
    <div className={classes.SideNav} >
      <div 
        onClick={() => props.onHide()}
        className={classes.close}>
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
      </div>
      <Menu />
    </div>
  )
}
