import Animations from './animationCollection';
import Elements from './elementCollection';

export default class transitionCollection {
  constructor() {
    this.elements = new Elements();
    this.animations = new Animations();
  }

  helloWorldFlash() {
    const e = this.elements.helloWorld().element;
    document.body.appendChild(e);
    this.animations.fadeInFadeOutInPlace(e, 3000);
    setInterval(() => { e.remove(); }, 3001);
  }
}
