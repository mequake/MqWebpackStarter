import Transitions from './collections/transitionCollection';

export default class app {
  constructor(args) {
    this.args = args;
  }

  Start() {
    this.transitions = new Transitions();
    this.transitions.helloWorldFlash();
    // HELLO WORLD PUBLISHED
  }
}
