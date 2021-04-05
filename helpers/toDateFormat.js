export default function toDateFormat(strDate){
  let strToDate = new Date(strDate);
  let nameDay = strToDate.toLocaleDateString('es-CL', { weekday: 'long' });
  let numericDay = strToDate.toLocaleDateString('es-CL', { day: '2-digit' });
  let shortMonth = strToDate.toLocaleDateString('es-CL', { month:'short' });

  return `${nameDay} ${numericDay} de ${shortMonth}`;
};