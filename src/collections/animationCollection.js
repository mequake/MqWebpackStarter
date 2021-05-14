'use strict';
import anime from 'animejs';

export default class animationCollection
{
  fadeInFadeOutInPlace(target, dur)
    {
      console.log("debug");
      anime({
      targets: target,
      duration: dur,
      easing: "easeInOutQuint",
      opacity: ['0%', '100%', '0%' ]
      })
    };
}