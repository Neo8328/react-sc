import React from 'react';
import classes from './Title.module.css';

export default function Title(props) {
  return (
    <div className={classes.OutBox}>
      <div className={classes.title}>{props.categorie}</div>
      <div className={classes.line}></div>
    </div>
  )
}
