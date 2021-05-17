import HelloWorld from '../elements/helloWorld';
//import ColorCollection from './colorCollection';

export default class elementCollection {
  constructor() {
    this.HelloWorld = HelloWorld;
  }

  helloWorld() {
    return new this.HelloWorld();
  }
}
