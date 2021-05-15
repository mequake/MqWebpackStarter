import Animations from './animationCollection';
import Elements from './elementCollection';
import ApiHello from '../apiCalls/apiHello';

export default class transitionCollection {
  constructor() {
    this.elements = new Elements();
    this.animations = new Animations();
    this.apiHello = new ApiHello(this.animations);
  }

  helloWorldFlash() {
    const e = this.elements.helloWorld().element;
    e.style.visibility = 'hidden';
    document.body.appendChild(e);
    this.apiHello.run(e);

    // setInterval(() => {
    //   e.remove();
    // }, 3001);
  }
}
