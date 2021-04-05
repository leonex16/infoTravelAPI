import travelForm from './modules/travelForm.js';
import ticketAvailability from './modules/ticketAvailability.js';
import dataPassanger from './modules/dataPassenger.js';
import seatsSelector from './modules/seatsSelector.js';

window.addEventListener('beforeunload', () => {
  location.hash = ''
})

window.addEventListener('hashchange', e => {
  ticketAvailability(e);
  dataPassanger(e);
  seatsSelector(e);
});

document.addEventListener('submit', e => {
  travelForm(e);
  dataPassanger(e);
  seatsSelector(e);
})
