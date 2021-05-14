'use strict';
export default class app
{
  constructor(args){   
    this.args = args;
    this.readyFn = function (__args){
      console.log(`Document ready. Run Id: ${__args[0]} .`);
      console.log(window);
    };
    $(this.readyFn(this.args));    
    this.body = $('body')[0];
    this.body.innerHTML = "12345";
  }
}