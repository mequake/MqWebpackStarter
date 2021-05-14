'use strict';
import transitions from './collections/transitionCollection';
export default class app
{

  constructor(args)
  {   
      this.args = args;
      this.readyFn = function (__args){
        console.log(`Document ready. Run Id: ${__args[0]} .`);
      }
      this.transitions = new transitions();
      this.transitions.helloWorldFlash();
      $(this.readyFn(this.args));
  }

} 