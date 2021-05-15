import axios from 'axios';

export default class getHello {
  constructor(animations) {
    this.animations = animations;
    this.axios = axios;
    this.ready = false;
  }

  run(e) {
    this.target = document.getElementById('child2p');
    this.axios('http://127.0.0.1:3050/hello').then((response) => {
      this.target.innerText = response.data.Sample1;
    })
      .catch(() => {
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
