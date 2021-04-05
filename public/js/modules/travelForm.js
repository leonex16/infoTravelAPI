import sendDataPost from '/sendDataPost.js';
import loader from '/loader.js';

export default function travelForm(e){
  e.preventDefault();

  if(!e.target.matches('form[id="travelForm"]')) return false;

  let dataTicket = {
    cityFrom: e.target.from.value,
    cityTo: e.target.to.value,
    goDate: e.target.dateGo.value,
    backDate: e.target.dateBack.value === '' ? null : e.target.dateBack.value,
    quantityPassenger: e.target.quantityPassenger.value,
  };

  loader();
  sendDataPost(dataTicket)
  styles();
  location.hash = 'disponibilidad-pasajes-ida';
};

function styles(){
  let $travelFrom = document.getElementById('travelFrom');

  $travelFrom.classList.add('transition-opacity');
  setTimeout(() => $travelFrom.classList.add('d-none') , 200);
  
};