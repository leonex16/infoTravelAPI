export default function createPassengerForm(quantityPassenger) {
  let num = parseInt(quantityPassenger, 10);
  let $formContainer = document.getElementById("quantityPassengerForm");
  let html = "";

  for (let i = 1; i <= num; i++) {
    html += `
    <section id="${i}formPassenger" class="" data-formPassenger>
    <h3 class="">Pasajero ${i}</h3>
    <div class="my-2">
      <label for="${i}rut" class="form-label fs-6 m-0">Rut</label>
      <input id="${i}rut" name="rut" type="text" value="11.111.111-2" class="form-control form-control-sm"/>
    </div>
    <div class="my-2">
      <label for="${i}name" class="form-label fs-6 m-0">Nombre</label>
      <input id="${i}name" name="name" type="text" value="Jane" class="form-control form-control-sm"/>
    </div>
    <div class="my-2">
      <label for="${i}lastName" class="form-label fs-6 m-0">Apellido</label>
      <input id="${i}lastName" name="lastName" type="text" value="Doe" class="form-control form-control-sm"/>
    </div>
    <div class="my-2">
      <label for="${i}personalPhone" class="form-label fs-6 m-0">Teléfono Personal</label>
      <input id="${i}personalPhone" name="personalPhone" type="text" value="912345678" class="form-control form-control-sm"/>
    </div>
    <div class="my-2">
      <label for="${i}emergencyPhone" class="form-label fs-6 m-0">Teléfono de Emergencia</label>
      <input id="${i}emergencyPhone" name="emergencyPhone" type="text" value="987456321" class="form-control form-control-sm"/>
    </div>
    <div class="my-2">
      <label for="${i}email" class="form-label fs-6 m-0">Correo Eléctronico</label>
      <input id="${i}email" name="email" type="email" value="jane.doe@gmail.com" class="form-control form-control-sm"/>
    </div>
    <div class="my-2">
      <label for="${i}nacionality" class="form-label fs-6 m-0">Nacionalidad</label>
      <input id="${i}nacionality" name="nacionality" type="text" list="nacionalities" value="Chilena" class="form-control form-control-sm"/>
      <datalist id="nacionalities">
        <option value="Chilena"></option>
        <option value="Afgana"></option>
        <option value="Alemana"></option>
        <option value="Árabe"></option>
        <option value="Argentina"></option>
        <option value="Australiana"></option>
        <option value="Belga"></option>
        <option value="Boliviana"></option>
        <option value="Brasileña"></option>
        <option value="Camboyana"></option>
        <option value="Canadiense"></option>
        <option value="China"></option>
        <option value="Colombiana"></option>
        <option value="Coreana"></option>
        <option value="Costarricense"></option>
        <option value="Cubana"></option>
        <option value="Danesa"></option>
        <option value="Ecuatoriana"></option>
        <option value="Egipcia"></option>
        <option value="Salvadoreña"></option>
        <option value="Escocesa"></option>
        <option value="Española"></option>
        <option value="Estadounidense"></option>
        <option value="Estonia"></option>
        <option value="Etiope"></option>
        <option value="Filipina"></option>
        <option value="Finlandesa"></option>
        <option value="Francesa"></option>
        <option value="Galesa"></option>
        <option value="Griega"></option>
        <option value="Guatemalteca"></option>
        <option value="Haitiana"></option>
        <option value="Holandesa"></option>
        <option value="Hondureña"></option>
        <option value="Indonesa"></option>
        <option value="Inglesa"></option>
        <option value="Iraquí"></option>
        <option value="Iraní"></option>
        <option value="Irlandesa"></option>
        <option value="Israelí"></option>
        <option value="Italiana"></option>
        <option value="Japonesa"></option>
        <option value="Jordana"></option>
        <option value="Laosiana"></option>
        <option value="Letona"></option>
        <option value="Letonesa"></option>
        <option value="Malaya"></option>
        <option value="Marroquí"></option>
        <option value="Mexicana"></option>
        <option value="Nicaragüense"></option>
        <option value="Noruega"></option>
        <option value="Neozelandesa"></option>
        <option value="Panameña"></option>
        <option value="Paraguaya"></option>
        <option value="Peruana"></option>
        <option value="Polaca"></option>
        <option value="Portuguesa"></option>
        <option value="Puertorriqueño"></option>
        <option value="Dominicana"></option>
        <option value="Rumana"></option>
        <option value="Rusa"></option>
        <option value="Sueca"></option>
        <option value="Suiza"></option>
        <option value="Tailandesa"></option>
        <option value="Taiwanesa"></option>
        <option value="Turca"></option>
        <option value="Ucraniana"></option>
        <option value="Uruguaya"></option>
        <option value="Venezolana"></option>
        <option value="Vietnamita"></option>
      </datalist>
    </div>
    <hr>
  </section>
    `;
  };

  html += `
  <div class="my-2 text-center">
    <button id="btn-dataPassenger" class="btn btn-outline-primary" type="submit">Continuar</button>
  </div>
  `;

  $formContainer.innerHTML = html;
};
