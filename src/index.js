'use strict';
import app from './app';
//import './assets/css/styles.css';
import cuid from 'cuid';
import('./assets/css/mystyles.scss')

class startUp
{
  constructor(){
    this.startupArgs = [cuid()];
    this.ap = new app(this.startupArgs);
  } 
}

new startUp();