'use strict';

var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require('johnny-five');
 
//create the udp serialport and specify the host and port to connect to
var sp = new VirtualSerialPort({
  host: '192.168.4.1', // 192.168.4.1
  // type: 'udp4',
  // port: 1025
});

var io = new firmata.Board(sp);
io.once('ready', function(){
    console.log('IO Ready');
    io.isReady = true;

    var board = new five.Board({ io, repl: true });

    board.on('ready', function(){
        console.log('five ready');

        var relay = new five.Relay(10);
        this.repl.inject({
          relay: relay
        });
    });
});
