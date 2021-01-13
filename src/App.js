import './base.scss';
import Head from './components/Head/Head';
import Overview from './containers/Overview/Overview';
import React from 'react';
import Toolbar from './containers/Toolbar/Toolbar';
import classes from './App.module.scss';

const App = function () {

  console.log(classes);

  return <div className={classes.App}>
    <Head></Head>
    <Overview></Overview>
    <Toolbar></Toolbar>
  </div>;

};


export default App;
