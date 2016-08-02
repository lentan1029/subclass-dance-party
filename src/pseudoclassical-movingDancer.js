var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 1);
  var colors = ['blue', 'red', 'green'];
  var color = colors[Math.floor(Math.random() * 3)];
  console.log(color);
  console.log('<span class="dancer moving"><img src="./' + color + 'mobius.png"></img></span>');
  this.$node = $('<span class="dancer moving"><img src="./' + color + 'mobius.png"></img></span>');
  this.$node.addClass('moving');
  this.horizontalSpeed = Math.random() * 10 + 5;
  this.verticalSpeed = Math.random() * 10 + 5;
  this.padding = 0;
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(timeBetweenSteps) {

  // if (Object.getPrototypeOf(this).step === undefined) {
  //   debugger;
  // }
  // console.log(Object.getPrototypeOf(Object.getPrototypeOf(this)).step);
  // debugger;
  // console.log(Object.getPrototypeOf(Object.getPrototypeOf(this)));
  Object.getPrototypeOf(Object.getPrototypeOf(this)).step.call(this, timeBetweenSteps);

  this.move();
  // console.log('blink');
};

MovingDancer.prototype.move = function() {
  this.verticalSpeed = this.verticalSpeed * 0.999;
  this.horizontalSpeed = this.horizontalSpeed * 0.999;
  this.setPosition(this.top + this.verticalSpeed, this.left + this.horizontalSpeed);
  if (this.left + this.$node.width() > $('body').width() - this.padding) { //exiting right border
    this.horizontalSpeed = -Math.abs(this.horizontalSpeed);
  }
  if (this.left < this.padding) {
    this.horizontalSpeed = Math.abs(this.horizontalSpeed);
  }
  if (this.top + this.$node.height() > $('body').height() - this.padding) { //exiting bottom border
    this.verticalSpeed = -Math.abs(this.verticalSpeed);
  }
  if (this.top < this.padding) {
    this.verticalSpeed = Math.abs(this.verticalSpeed);
  }
};