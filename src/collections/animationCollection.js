import anime from 'animejs';

export default class animationCollection {
  constructor() {
    this.anime = anime;
  }

  fadeInFadeOutInPlace(target, dur) {
    this.anime({
      targets: target,
      duration: dur,
      easing: 'easeInOutQuint',
      opacity: ['0%', '100%', '0%'],
    });
  }
}
