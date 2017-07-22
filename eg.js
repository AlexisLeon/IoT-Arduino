const five = require('johnny-five');

const board = new five.Board();

  board.on('ready', () => {
    const devices = {
      relay: new five.Relay(10)
    }

    devices.relay.on();

    devices.relay.off();
})
