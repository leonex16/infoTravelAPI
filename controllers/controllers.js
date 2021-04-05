let TicketsDataModels = require("../models/models.js");

class TicketsDataControllers {
  constructor() {
    this.data = {};
  }

  getIndex = (req, res) => res.render("index");

  getSummary = (req, res) =>
    res.render("summary", { data: this.formatData(this.data) });

  keepData = (req, res) => {
    Object.keys(this.data).length <= 0
      ? (this.data = req.body)
      : (this.data = Object.assign({}, this.data, req.body));

    res.end();
  };

  saveData = (req, res) => {
    this.data = Object.assign({}, this.data, req.body);

    TicketsDataModels.saveData(this.createRecord(this.data), err => {
      err ? console.error(err.stack) : false;
    });

    res.end();
  };

  createRecord(allInformationTicket) {
    let quantityPassenger = allInformationTicket.passengers.length;
    let quantityRecords = [];

    for (let i = 0; i < quantityPassenger; i++) {
      let tempInformation = this.formatData( JSON.parse( JSON.stringify(allInformationTicket) ) );
      debugger;
      if(tempInformation.backDate){
        tempInformation.seatNumberReturn = tempInformation.seatsReturn[i].numberSeat;
      };

      tempInformation.seatNumberDepart = tempInformation.seatsDepart[i].numberSeat;
      tempInformation.passenger = tempInformation.passengers[i];

      delete tempInformation.hourGoDepart;
      delete tempInformation.goArriveHourDepart;
      delete tempInformation.hourGoReturn;
      delete tempInformation.goArriveHourReturn;
      delete tempInformation.seatsDepart;
      delete tempInformation?.seatsReturn;
      delete tempInformation.passengers;

      quantityRecords.push(tempInformation);
    }

    return quantityRecords;
  };

  formatData(data) {
    data.passengers?.forEach( (passenger) => (passenger.rut = passenger.rut.replaceAll(/\.+/g, "")), 10 );

    data.goDate = new Date(`${data.goDate} ${data.hourGoDepart}`);
    data.beforePriceDepart = parseInt(data.beforePriceDepart.replaceAll(/\D+/g, ""), 10);
    data.dctoDepart = parseInt(data.dctoDepart.replaceAll(/\D+/g, ""), 10);
    data.afterPriceDepart = parseInt(data.afterPriceDepart.replaceAll(/\D+/g, ""), 10);
    data.goArriveDateDepart = new Date(`${data.goArriveDateDepart} ${data.goArriveHourDepart}`);

    if(data.backDate){
      data.backDate = new Date(`${data.backDate} ${data.hourGoReturn}`);
      data.goArriveDateReturn = new Date(`${data.goArriveDateReturn} ${data.goArriveHourReturn}`);
      data.beforePriceReturn = parseInt(data.beforePriceReturn.replaceAll(/\D+/g, ""), 10);
      data.dctoReturn = parseInt(data.dctoReturn.replaceAll(/\D+/g, ""), 10);
      data.afterPriceReturn = parseInt(data.afterPriceReturn.replaceAll(/\D+/g, ""), 10);
    };

    data.quantityPassenger = parseInt(data.quantityPassenger, 10);

    return data;
  }
}

module.exports = new TicketsDataControllers();
