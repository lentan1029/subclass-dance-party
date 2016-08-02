var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 5);
  var colors = ['blue', 'red', 'green'];
  var color = colors[Math.floor(Math.random() * 3)];
  // console.log(color);
  // console.log('<span class="dancer moving"><img src="./' + color + 'mobius.png"></img></span>');
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
  var verticalDistFromBlackhole = this.$node.position().top - $('#blackhole').position().top;
  var horizontalDistFromBlackhole = this.$node.position().left - $('#blackhole').position().left;
  console.log(verticalDistFromBlackhole);
  // console.log(this.$node.position().top);
  var absDist = Math.pow(verticalDistFromBlackhole, 2) + Math.pow(horizontalDistFromBlackhole, 2);
  var factor = 2000 / absDist;

  this.verticalSpeed = this.verticalSpeed * 0.9935;
  if (verticalDistFromBlackhole < -30) {
    this.verticalSpeed += Math.abs(Math.sin(Math.atan(verticalDistFromBlackhole / horizontalDistFromBlackhole))) * factor;
  } else if (verticalDistFromBlackhole > 30) {
    this.verticalSpeed -= Math.abs(Math.sin(Math.atan(verticalDistFromBlackhole / horizontalDistFromBlackhole))) * factor;
  }
  this.horizontalSpeed = this.horizontalSpeed * 0.9935;
  if (horizontalDistFromBlackhole < -30) {
    this.horizontalSpeed += Math.abs(Math.cos(Math.atan(verticalDistFromBlackhole / horizontalDistFromBlackhole))) * factor;
  } else if (horizontalDistFromBlackhole > 30) {
    this.horizontalSpeed -= Math.abs(Math.cos(Math.atan(verticalDistFromBlackhole / horizontalDistFromBlackhole))) * factor;
  }
  // if (horizontalDistFromBlackhole < -1) {
  //   this.horizontalSpeed += Math.cos(Math.atan(verticalDistFromBlackhole / horizontalDistFromBlackhole)) * factor;
  // } else if (horizontalDistFromBlackhole > 1) {
  //   this.horizontalSpeed -= Math.cos(Math.atan(verticalDistFromBlackhole / horizontalDistFromBlackhole)) * factor;
  // }
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