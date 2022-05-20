class ViajeUsuario {
    constructor(dias, transporte, salida, destino) {
        this.dias = dias;
        this.transporte = transporte;
        this.salida = salida;
        this.destino = destino;
    }
}

const listaViajes = JSON.parse(localStorage.getItem("viajes")) || [];
armoDivViajes(listaViajes);

const boton = document.querySelector("#btn");
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
    let dias = document.querySelector("#botonDias").value;
    let transporte = document.querySelector("#botonTransporte").value;
    let salida = document.querySelector("#botonSalida").value;
    let destino = document.querySelector("#botonDestino").value;

    let viaje = new ViajeUsuario(dias, transporte, salida, destino);

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
          <span class="name">TRANSPORTE<br><span>${viaje.transporte}</span></span>
          <span class="flight">NRO VUELO<br><span>X3-65C3</span></span>
          <span class="gate">PUERTA<br><span>11B</span></span>
          <span class="seat">LUGAR<br><span>45A</span></span>
          <span class="boardingtime">CANTIDAD DIAS<br><span>${viaje.dias}</span></span>
              
           <span class="flight flightslip">NRO VUELO<br><span>X3-65C3</span></span>
            <span class="seat seatslip">LUGAR<br><span>45A</span></span>
           <span class="name nameslip">TRANSPORTE<br><span>${viaje.transporte}</span></span>
        </div>
      </div>
      <div class="barcode"></div>
      <div class="barcode slip"></div>
    </div>
  </div>

    `;
}



/*
function createB() {
    var btn = document.createElement("BUTTON"); //Create a button
      var r = document.createTextNode("This  is a created button with a function and class"); //The text the button will have
      var attr = document.createAttribute("onclick"); //create an atribute ONCLICK
      attr.value = "duplicateF()"; //With value "duplicateF()"... onclick= "duplicateF()"
      var attrr = document.createAttribute("class"); //create an attribute class...
      attrr.value = "myClass"; //class= "myClass"
      btn.appendChild(r); //Append the text to the button
      var append = document.getElementById("duplicate").appendChild(btn); //Show the button in a div called "duplicate"
      append.setAttributeNode(attr); //append attribute 1 onclick to the button
      append.setAttributeNode(attrr); //append attribute 2 class to the button
  }
  
  function duplicateF(){
  alert("Hello World");
  }
  
  function deleteDiv(){
    document.getElementById("duplicate").innerHTML = "";
  }
  */

//if (ViajeUsuario == ("1Mes", "Avion", "cuidad de buenos aires", "tierra del fuego" )){
//return 
//}
//funcion de mostrar imagenes de viajes
//funcion de mostrar imagen que dice perdon, estamos trabajando en ese itinerario para una experiencia inolvidable, estara lista mas adelante.



//

/*
class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }
}

const listaMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const nuevaMascota =() => {
    let nombre = document.querySelector("#...").value;
    let tipo = document.querySelector("#...").value;
    let edad = parseInt(document.querySelector("#...")).value;
}

let mascota = new Mascota(nombre, tipo, edad);
listaMascotas.push(mascota);
localStorage.setItem("mascotas", JSON.stringify(listaMascotas));

const boton = document.querySelector("#btn");
boton.addEventListener("click", nuevaMascota);

*/