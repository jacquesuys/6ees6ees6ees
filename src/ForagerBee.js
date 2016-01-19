import Bee from './Bee'

class ForagerBee extends Bee {
  constructor() {
  	super()
  	this.age = 10;
  	this.canFly = true;
  	this.treasureChest = [];
  	this.job = 'find pollen';
  }
  forage(treasure) {
  	this.treasureChest.push(treasure);
  }
};

export default ForagerBee;