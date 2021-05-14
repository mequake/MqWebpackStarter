'use strict';
import app from './app';
import './styles.css';
import cuid from 'cuid';

class startUp
{
  constructor(){
    this.runId = [cuid()];
    this.ap = new app(this.runId);
  } 
}

new startUp();