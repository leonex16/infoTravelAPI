let connection = require('./con.js')

class TicketsDataModels{
  constructor(){};

  saveData(informationTicket, cb){
    let query = `INSERT INTO TICKETS_DATA SET ?`;

    let rows = [];
    
    informationTicket.forEach(ticket => {
      let row = {
        'rut': ticket.passenger.rut,
        'name': ticket.passenger.name,
        'last_name': ticket.passenger.lastName,
        'personal_phone': ticket.passenger.personalPhone,
        'emergency_phone': ticket.passenger.emergencyPhone,
        'email': ticket.passenger.email,
        'nacionality': ticket.passenger.nacionality,
  
        'go_date': ticket.goDate,
        'go_arrive_date': ticket.goArriveDateDepart,
        'city_from_depart': ticket.cityFrom,
        'city_to_depart': ticket.cityTo,
        'climb_stop_depart': ticket.climbStopDepart,
        'descent_stop_depart': ticket.descentStopDepart,
  
        'floor_number_depart': 1,
        'seat_number_depart': ticket.seatNumberDepart,
        'before_price_depart': ticket.beforePriceDepart,
        'dcto_depart': ticket.dctoDepart,
        'after_price_depart': ticket.afterPriceDepart,
        'seat_type_depart': ticket.seatTypeDepart,
        'company_depart': ticket.companyDepart,
  
        'back_date': ticket.backDate ?? null,
        'back_arrive_date': ticket.goArriveDateReturn ?? null,
        'city_from_return': ticket.cityTo ?? null,
        'city_to_return': ticket.cityFrom ?? null,
        'climb_stop_return': ticket.climbStopReturn ?? null,
        'descent_stop_return': ticket.descentStopReturn ?? null,
        
        'floor_number_return': 1,
        'seat_number_return': ticket.seatNumberReturn,
        'before_price_return': ticket.beforePriceReturn,
        'dcto_return': ticket.dctoReturn,
        'after_price_return': ticket.afterPriceReturn,
        'seat_type_return': ticket.seatTypeReturn,
        'company_return': ticket.companyReturn,
      };
      
      connection.query(query, row, cb);
    });
  };
};

module.exports = new TicketsDataModels();