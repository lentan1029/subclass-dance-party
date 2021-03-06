var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this._time = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  if (!timeBetweenSteps) {
    timeBetweenSteps = this._time;
  }
  setTimeout(function(timeBetweenSteps) {
    // debugger;
    this.step.bind(this)(timeBetweenSteps);
  }.bind(this), timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings);
};

