var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var pin = new five.Pin({
    pin: "A5"
  });

  pin.read(function(error, value) {
    console.log(value);
  });
});