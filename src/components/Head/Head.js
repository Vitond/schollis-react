import React from 'react';
import classes from './Head.module.scss';

const head = () => (
  <div className={classes.Head}>
    <p className={classes.name}>Ondřej Vitula</p>
    <p className={classes.date}>24.9.2020</p>
    <p>11:11</p>
  </div>
);

export default head;