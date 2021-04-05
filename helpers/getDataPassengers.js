export default function getDataPassengers($forms){
  let dataPassengers = [];

  $forms.forEach(form => {
    let dataPassenger = {};
    let inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
      dataPassenger[input.name] = input.value;
    });

    dataPassengers.push(dataPassenger);
  });

  return dataPassengers;
};