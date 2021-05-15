export default class helloWorld {
  constructor() {
    this.t = Date.now;
    this.element = document.createElement('section');
    this.element.classList.add('section', 'is-large', 'has-text-centered');
    this.parentTile = document.createElement('div');
    this.parentTile.classList.add('tile', 'is-ancestor', 'is-vertical');
    this.child1 = document.createElement('div');
    this.child1.classList.add('tile', 'is-child');
    this.child1box = document.createElement('div');
    this.child1box.classList.add('box', 'has-background-grey-light');
    this.child1.appendChild(this.child1box);
    this.child2 = document.createElement('div');
    this.child2.classList.add('tile', 'is-child');
    this.child2p = document.createElement('p');
    this.child2p.id = 'child2p';
    this.child2p.classList.add('title', 'has-text-black-ter');
    this.child2.appendChild(this.child2p);
    this.child3 = document.createElement('div');
    this.child3.classList.add('tile', 'is-child');
    this.child3box = document.createElement('div');
    this.child3box.classList.add('box', 'has-background-grey-light');
    this.child3.appendChild(this.child3box);
    this.parentTile.appendChild(this.child1);
    this.parentTile.appendChild(this.child2);
    this.parentTile.appendChild(this.child3);
    this.element.appendChild(this.parentTile);
  }
}
