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


/* boton.onclick = (e) => {    

    e.preventDefault();
    swal({
        title: "Muy Bien!",
        text: "Se han cargado correctamente los datos!",
        icon: "success",
    });
} */


boton.addEventListener("click", (e) => {

    e.preventDefault();

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

    console.log(viaje);

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
        <div class="viaje_ind">
            <p>Origen <span id="span_origen">${viaje.salida}</span></p>
            <p>Destino <span id="span_destino">${viaje.destino}</span></p>
            <p>Transporte <span id="span_transporte">${viaje.transporte}</span></p>
            <p>Días <span id="span_dias">${viaje.dias}</span></p>
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