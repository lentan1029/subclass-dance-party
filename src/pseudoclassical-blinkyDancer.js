var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {

  // if (Object.getPrototypeOf(this).step === undefined) {
  //   debugger;
  // }
  // console.log(Object.getPrototypeOf(Object.getPrototypeOf(this)).step);
  // debugger;
  // console.log(Object.getPrototypeOf(Object.getPrototypeOf(this)));
  Object.getPrototypeOf(Object.getPrototypeOf(this)).step.call(this, timeBetweenSteps);

  this.$node.toggle();
  // console.log('blink');
};