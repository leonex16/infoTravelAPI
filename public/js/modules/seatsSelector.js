import sendDataPost from "/sendDataPost.js";
import createSeatsInput from "/createSeatsInput.js";

export default function seatsSelector(e){
  if(location.hash !== '#selector-asientos') return;

  if(e.type === 'hashchange'){
    createSeatsInput();
  }else{
    // SUBMIT EVENT
    e.preventDefault();
    
    if( e.target.matches('form[id="seatsSelectorDepartForm"]') || e.target.matches('form[id="seatsSelectorReturnForm"]') ){
      let backDate = document.getElementById("dateBack").value;
      let inputsContainerDepart = document.querySelectorAll(`div[data-seatsSelectorDepart`);
      let numberSeatsDepart = [];

      inputsContainerDepart.forEach(div => {
        let $inp = div.querySelector('input');
        numberSeatsDepart.push({[$inp.name]: $inp.value});
      });
      
      setOpacity0('seatsSelectorDepart', 1);
      setOpacity0();
      removeDisplayNone('seatsSelectorReturn');

      if( backDate === '' ){
        sendDataPost({seatsDepart: numberSeatsDepart}, '/resumen');
        setTimeout(() => {
          location.hash = '';
          location.pathname = '/resumen';
        }, 500);
      }else if( e.target.id === 'seatsSelectorReturnForm' ){
        let inputsContainerReturn = document.querySelectorAll(`div[data-seatsSelectorReturn`);
        let numberSeatsReturn = [];
        inputsContainerReturn.forEach(div => {
          let $inp = div.querySelector('input');
          numberSeatsReturn.push({[$inp.name]: $inp.value});
        });

        sendDataPost({seatsDepart: numberSeatsDepart});
        sendDataPost({seatsReturn: numberSeatsReturn}, '/resumen');
        setTimeout(() => {
          location.hash = '';
          location.pathname = '/resumen';
        }, 500);
      };
    }else return;
  };

  setOpacity0();
  setInterval(() => document.getElementById("loader").classList.add('d-none'), 800);
  // setOpacity0('seatsSelectorDepart', 1);
  // removeDisplayNone('seatsSelectorReturn');
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

  setTimeout(() => element.classList.add("transition-opacity"), 3000);
  loader.classList.remove('d-none');
}
