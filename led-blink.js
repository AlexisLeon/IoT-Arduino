var five = require("johnny-five");
var board = new five.Board(
// {
//   port: "/dev/cu.usbmodem1411"
// }
);

board.on("ready", function() {

  var led = new five.Led(13);

  this.repl.inject({
    led: led
  });

  led.blink()
});