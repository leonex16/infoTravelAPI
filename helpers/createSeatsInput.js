export default function createSeatsInput() {
  let $seatsSelectorDepartForm = document.getElementById("seatsSelectorDepartForm");
  let $seatsSelectorReturnForm = document.getElementById("seatsSelectorReturnForm");
  let quantityPassenger = document.getElementById("quantityPassenger").value;
  let backDate = document.getElementById("dateBack").value;
  let html = "";

  for (let i = 1; i <= parseInt(quantityPassenger); i++) {
    html += ` 
    <div id="${i}seatNumberPassenger" data-seatsSelectorDepart class="my-2">
      <label for="${i}numberSeat" class="form-label">Número del asiento (1 al 46)</label>
      <input name="numberSeat" type="text" value="${getRandomNumber()}" class="form-control"/>
    </div>
    `;
  }

  $seatsSelectorDepartForm.insertAdjacentHTML("beforebegin", html);

  if (backDate !== "") {
    html = "";
    for (let i = 1; i <= parseInt(quantityPassenger); i++) {
      html += ` 
      <div id="${i}seatNumberPassenger" data-seatsSelectorReturn class="my-2">
        <label for="${i}numberSeat" class="form-label">Número del asiento (1 al 46)</label>
        <input name="numberSeat" type="text" value="${getRandomNumber()}" class="form-control"/>
      </div>
      `;
    }

    $seatsSelectorReturnForm.insertAdjacentHTML("beforebegin", html);
  };
};


function getRandomNumber(){
  return Math.floor(Math.random() * (46 - 1) + 1);
};
