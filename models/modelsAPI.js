let connection = require('./con');

let ModelsAPI = {};

ModelsAPI.getTicketById = (idTicket, cb) => {
  connection.query('SELECT * FROM TICKETS_DATA WHERE id_ticket = ?', idTicket, cb);
};

ModelsAPI.getTicketByRut = (rut, cb) => {
  connection.query('SELECT * FROM TICKETS_DATA WHERE rut = ?', rut, cb);
};

module.exports = ModelsAPI;