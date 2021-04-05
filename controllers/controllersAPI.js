let ModelsAPI = require('../models/modelsAPI');

let ControllersAPI = {};

ControllersAPI.getTicketById = (req, res) => {
  ModelsAPI.getTicketById(req.params.id, (err, records) =>{
    if(err) return console.log(err.stack);

    if(records.length === 0){
      res.json({records: 0});
    }else{
      res.json(records);
    };
  });
};

ControllersAPI.getTicketByRut = (req, res) => {
  ModelsAPI.getTicketByRut(req.params.rut, (err, records) =>{
    if(err) return console.log(err.stack);

    if(records.length === 0){
      res.json({records: 0});
    }else{
      res.json(records);
    };
  });
};

module.exports = ControllersAPI;