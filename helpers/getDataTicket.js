export default function getDataTicket($ticket){
  let $dataTicketElement = $ticket.querySelectorAll('span[data-form-ticketAvailability]');
  let suffix = location.hash === '#disponibilidad-pasajes-ida' ? 'Depart' : 'Return';

  return {
    [`hourGo${suffix}`]: $dataTicketElement[0].textContent,
    [`climbStop${suffix}`]: $dataTicketElement[1].textContent,
    [`goArriveDate${suffix}`]: $dataTicketElement[2].textContent,
    [`goArriveHour${suffix}`]: $dataTicketElement[3].textContent,
    [`descentStop${suffix}`]: $dataTicketElement[4].textContent,
    [`beforePrice${suffix}`]: $dataTicketElement[5].textContent,
    [`dcto${suffix}`]: $dataTicketElement[6].textContent,
    [`afterPrice${suffix}`]: $dataTicketElement[7].textContent,
    [`seatType${suffix}`]: $dataTicketElement[8].textContent,
    [`company${suffix}`]: $dataTicketElement[9].textContent
  };
};