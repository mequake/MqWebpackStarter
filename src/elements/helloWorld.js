'use strict';
export default class helloWorld
{
  constructor(){
    this.t = Date.now;
    try
    {
      this.element = $(`<div class="notification is-primary">
      <div class="cssD002">
        Hello World
      </div>
    </div>`)[0];
    }
    catch(e)
    {
      console.log(e);
    }
  }
}