const { MSG, MOVE_DOWN_KEY, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require('./constants');
// setup interface to handle user input from stdin
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};
const handleUserInput = (data) => {
  //exit server
  if (data === '\u0003') {
    process.exit();
  }
  //movements
  if (data === 'w') {
    connection.write(MOVE_UP_KEY);
  }
  if (data === 'a') {
    connection.write(MOVE_LEFT_KEY);
  }
  if (data === 's') {
    connection.write(MOVE_DOWN_KEY);
  }
  if (data === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  }
  if (data === ' ') {
    connection.write(MSG);
  }
};

module.exports = { setupInput };