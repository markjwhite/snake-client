const net = require('net');
//establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131', //IP address here,
    port: 50542 //PORT number here,
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  //connect handler
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: Mrk');
  })

  //data handler
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })

  return conn
};

module.exports = connect;