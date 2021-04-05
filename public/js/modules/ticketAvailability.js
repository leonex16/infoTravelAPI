import getDataTicket from "/getDataTicket.js";
import sendDataPost from "/sendDataPost.js";

export default function ticketAvailability() {
  if (location.hash !== "#disponibilidad-pasajes-ida") return;
  setOpacity0();
  removeDisplayNone("ticketAvailabilityDepart");

  let $btnTicketAvailability = document.querySelectorAll(
    "button[data-btnTicketAvailability]"
  );

  $btnTicketAvailability.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let ticketContainer = e.target.parentElement.parentElement;
      let backDate = document.getElementById("dateBack").value;

      sendDataPost(getDataTicket(ticketContainer));

      if (location.hash === "#disponibilidad-pasajes-ida" && backDate !== "") {
        location.hash = "disponibilidad-pasajes-vuelta";
        setOpacity0("ticketAvailabilityDepart", 1);
        setOpacity0();
        removeDisplayNone("ticketAvailabilityReturn");
      } else {
        location.hash = "informacion-pasajeros";
        setOpacity0();
        setOpacity0("ticketAvailabilityDepart", 1);
        setOpacity0("ticketAvailabilityReturn", 1);
        removeDisplayNone("dataPassenger");
      }
    });
  });
}

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
