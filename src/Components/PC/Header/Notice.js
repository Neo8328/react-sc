import React from 'react';
import classes from './Notice.module.css';

export default function Notice() {
  return (
    <div className={classes.Notice}>
      <p className={classes.NoticeText}>於安省執行「居家令」期間，取貨點將維持路旁取貨（Curbside Pickup）服務</p>
    </div>
  )
}
