describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      // blinkyDancer.step();
      // console.log(spy1);
      // console.log(blinkyDancer);
      // console.log(sinon.spy.called);
      // console.log(sinon.spy.callCount);
      // debugger;
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
      sinon.spy(blinkyDancer, 'step');
      debugger;
      clock.tick(timeBetweenSteps * 2);


      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
