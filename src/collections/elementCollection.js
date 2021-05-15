import HelloWorld from '../elements/helloWorld';

export default class elementCollection {
  constructor() {
    this.HelloWorld = HelloWorld;
  }

  helloWorld() {
    return new this.HelloWorld();
  }
}
