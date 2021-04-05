import createPassangerForm from '/createPassangerForm.js';
import getDataPassengers from '/getDataPassengers.js';
import sendDataPost from '/sendDataPost.js';

export default function dataPassanger(e){
  if(location.hash !== '#informacion-pasajeros') return;

  if(e.type === 'hashchange'){
    let quantityPassenger = document.getElementById('quantityPassenger').value;
    createPassangerForm(quantityPassenger);
  }else{
    // SUBMIT EVENT
    e.preventDefault();
    
    if(!e.target.matches('form[id="quantityPassengerForm"]')) return false;
  
    let $formsPassenger = document.querySelectorAll('section[data-formPassenger]');
  
    sendDataPost({passengers : getDataPassengers($formsPassenger)});
    location.hash = 'selector-asientos';
    setOpacity0();
    setOpacity0('dataPassenger', 1);
    removeDisplayNone('seatsSelectorDepart');
  };
};

function removeDisplayNone(id) {
  let $element = document.getElementById(id);
  setInterval(() => $element.classList.remove("d-none"), 1000);
}

function setOpacity0(id = null, act = 0) {
  let loader = document.getElementById("loader");
  let element = document.getElementById(id) ?? loader;

  if (act === 1) {
    loader.classList.remove("transition-opacity");
    setTimeout(() => element.classList.add("visually-hidden"), 200);
  }

  setTimeout(() => element.classList.add("transition-opacity"), 800);
}