import axios from 'axios';
import Animations from './animationCollection';
import Elements from './elementCollection';

export default class transitionCollection {
  constructor(args) {
    this.args = args;
    this.elements = new Elements();
    this.animations = new Animations();
    this.axios = axios;
  }

  helloWorldFlash() {
    const e = this.elements.helloWorld().element;
    e.style.visibility = 'hidden';
    document.body.appendChild(e);
    this.target = document.getElementById('child2p');
    this.axios(`http://${this.args[1]}:${this.args[2]}/hello`).then((response) => {
      this.target.innerText = response.data.Sample1;
    })
      .catch((/* err */) => {
        // console.log(err);
        this.target.innerText = 'API Unresponsive';
      })
      .then(() => {
        this.ready = true;
        e.style.visibility = 'visible';
        this.animations.fadeInFadeOutInPlace(e, 3000);
        setInterval(() => {
          e.remove();
        }, 3001);
      });
  }
}
