let express = require('express');
let TicketsDataControllers = require(`../controllers/controllers`);
let router = express.Router();

router
	.get('/', TicketsDataControllers.getIndex)
	.get('/resumen', TicketsDataControllers.getSummary)
	.post('/resumen', TicketsDataControllers.saveData)
	.post('/', TicketsDataControllers.keepData)

module.exports = router; 