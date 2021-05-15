import HelloWorld from '../elements/helloWorld';

export default class elementCollection {
  helloWorld() {
    this.HelloWorld = HelloWorld;
    return new HelloWorld();
  }
}
