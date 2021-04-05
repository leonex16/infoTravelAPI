let express = require('express');
let router = express.Router();
let ControllersAPI = require('../controllers/controllersAPI');

router
  .get('/api/ticket/id/:id', ControllersAPI.getTicketById)
  .get('/api/ticket/rut/:rut', ControllersAPI.getTicketByRut);

module.exports = router;