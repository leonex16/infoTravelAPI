export default function sendDataPost(dataTicket, pathname = '/'){
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataTicket)
  };

  fetch(`http://localhost:3000${pathname}`, options)
    .catch(err => console.error(err));
};