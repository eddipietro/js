class ViajeUsuario {
  constructor(salida, destino, start, adults, end, children) {
      this.salida = salida;
      this.destino = destino;
      this.start = start;
      this.adults = adults;
      this.end = end;
      this.children = children;
  }
}

const listaViajes = JSON.parse(localStorage.getItem("viajes")) || [];
armoDivViajes(listaViajes);

const boton = document.querySelector(".btn");
//boton.addEventListener("click", nuevoViaje);

boton.addEventListener("click", (e) => {
 
  e.preventDefault(e);
 
  //y aca haces todo lo que queres. seguramente querras llamar a la funcion nuevoViaje, para que guarde lo que puso el usuario en el local storage. y despues podes llamar al swal ahi mismo
 
  nuevoViaje();
  
  //aca necesitarias una funcion que tome los datos nuevos del storage y los agregue al html
  swal({
      title: "Muy Bien!",
      text: "Se han cargado correctamente los datos!",
      icon: "success",
  });
})

function nuevoViaje() {
  let salida = document.querySelector("#salida-nombre").value;
  let destino = document.querySelector("#destino-nombre").value;
  let start = document.querySelector("#start").value;
  let adults = document.querySelector("#adults-number").value;
  let end = document.querySelector("#end").value;
  let children = document.querySelector("#children-number").value;

  
  
  if ((salida != "") && (destino != "") && (start != "") && (adults != "")  && (end != "") && (children != "")) {
    swal({
      title: "Muy Bien!",
      text: "Se han cargado correctamente los datos!",
      icon: "success",
  });
  } else {
    swal({
      title: "ERROR!",
      text: "No se han cargado todos los campos obligatorios!",
      icon: "warning",
  });
       nuevoViaje();
  }
  

  let viaje = new ViajeUsuario(salida, destino, start, adults, end, children);

  //console.log(viaje);

  listaViajes.push(viaje);
  localStorage.setItem("viajes", JSON.stringify(listaViajes));

  armoDivViajes(listaViajes);

}

function armoDivViajes(lista) {

  let lista_viajes = document.getElementById('lista_viajes');

  lista_viajes.innerHTML = '';

  lista.forEach(viaje => {
      lista_viajes.innerHTML += cardViaje(viaje);
  });

}

function cardViaje(viaje) {
  return `
 

  <div class="box">
  <ul class="left">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  
  <ul class="right">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  
  <div class="ticket">
    <span class="airline">Fly Now</span>
    <span class="airline airlineslip">Fly Now</span>
    <span class="boarding">Ticket </span>
    <div class="content">
      <span class="jfk">${viaje.salida}</span>
      <span class="plane"><?xml version="1.0" ?><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
      <span class="sfo">${viaje.destino}</span>
      
      <span class="jfk jfkslip">${viaje.salida}</span>
      <span class="plane planeslip"><?xml version="1.0" ?><svg clip-rule="evenodd" fill-rule="evenodd" height="50" width="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
      <span class="sfo sfoslip">${viaje.destino}</span>
      <div class="sub-content">
        <span class="watermark">FlyNow</span>
        <span class="name">FECHA SALIDA<br><span>${viaje.start}</span></span>
        <span class="flight">MENORES<br><span>${viaje.children}</span></span>
        <span class="seat">ADULTOS<br><span>${viaje.adults}</span></span>
        <span class="boardingtime">FECHA REGRESO<br><span>${viaje.end}</span></span>
            
         <span class="flight flightslip">NRO VUELO<br><span>X3-65C3</span></span>
         <span class="seat">ADULTOS<br><span>${viaje.adults}</span></span>
         <span class="name nameslip">FECHA SALIDA<br><span>${viaje.start}</span></span>
      </div>
    </div>
    <div class="barcode"></div>
    <div class="barcode slip"></div>
  </div>
</div>

  `;
}


