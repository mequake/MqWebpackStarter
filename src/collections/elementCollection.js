'use strict';
import helloWorld from '../elements/helloWorld';
export default class elementCollection
{
  static helloWorld = new helloWorld();
  static body = document.body;
}