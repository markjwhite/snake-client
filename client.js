const net = require('net');
const { IP, PORT, NAME } = require("./constants");
//establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP, //IP address here,
    port: PORT //PORT number here,
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  //connect handler
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${NAME}`);
  });

  //data handler
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };