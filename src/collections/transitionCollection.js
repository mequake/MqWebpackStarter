'use strict';
import animations from './animationCollection';
import elements from './elementCollection';
export default class transitionCollection
{
  constructor()
  {
    this.elements = new elements();
    this.animations = new animations();
  }

  helloWorldFlash() {         
      let e = elements.helloWorld.element;
      document.body.appendChild(e);
      this.animations.fadeInFadeOutInPlace(e, 2000);
      setInterval(function () {document.body.removeChild(e)}, 2001);
  };

}