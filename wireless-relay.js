var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");

console.log('Wait..');

var sp = new VirtualSerialPort({
  host: '192.168.1.71' // '192.168.4.1'
});

var io = new firmata.Board(sp);
io.once('ready', function(){
    console.log('IO Ready');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});

    board.on('ready', function(){
        console.log('five ready');
        var led = new five.Led(10);
        led.blink();
    });
});