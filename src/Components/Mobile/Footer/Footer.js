import React from 'react';
import classes from './Footer.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faEnvelopeOpen, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterBox}>
        <FontAwesomeIcon icon={faHouse}/>
      </div>
      <div className={classes.FooterBox}>
        <FontAwesomeIcon icon={faEnvelopeOpen}/>
      </div>
      <div className={classes.FooterBox}>
        <FontAwesomeIcon icon={faCartShopping}/>
      </div>
      <div className={classes.FooterBox}>
        <FontAwesomeIcon icon={faUser}/>
      </div>
    </div>
  )
}
