$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */


    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunction);

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    if (dancerMakerFunction === MovingDancer) {
      window.dancers.push(dancer);
    }
    $('body').append(dancer.$node);
  });

  $('.otherButton').on('click', function(event) {
    oldref = Dancer.prototype.setPosition;
    Dancer.prototype.setPosition = function() {};

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.css({position: 'relative', top: '0px', left: '0px', float: 'right'});
      $('.lineup').append(window.dancers[i].$node);
    }

    setTimeout(function() {
      Dancer.prototype.setPosition = oldref;
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].$node.css({position: 'absolute'});
        $('body').append(dancers[i].$node);
      }
    }, 3000);
  }); 


});

