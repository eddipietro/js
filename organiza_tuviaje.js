//LIBRERÍA JQUERY usando a modo de dom  con el id= input-search lupa buscadora
let buscadora = $("#table").DataTable();

$("#input-search").keyup(function(){
    
    buscadora.search($(this).val()).draw();
    
    if ($("#input-search").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
})


const elegirDias = document.querySelector("#elegirDias");
console.log(elegirDias);
console.log(elegirDias.innerText);

//LOGICA - onchange, input 
// ELEGIR DIAS

elegirDias.onchange = () => { }
elegirDias.addEventListener("change",()=>{
   console.log(`el valor cambio a ${elegirDias.value}`);
 })

 const botonDias = document.querySelector("#botonDias");
 botonDias.addEventListener("change", ()=>{
     console.log(botonDias.value);
 })
 

//Boton de Agregar Días que no esta terminado
// ya que no cumple con la funcion de agregar de a 1 dia, 
//segun la cantidad de veces que el usuario haga click sobre "agregar dias"
for (let i = elegirDias; i < 10; i ++) {
 const agregarDias = document.querySelector("#agregoDia"); 
   console.log(`agregarDias: ${i}`);
 }

 //ELEGIR TRANSPORTE
 const elegirTradnsporte = document.querySelector("#elegirTradnsporte");

 elegirTradnsporte.onchange = ()=>{}
 elegirTradnsporte.addEventListener("change",()=>{
   console.log(`el valor cambio a ${elegirTradnsporte.value}`);
 })

 const botonTransporte = document.querySelector("#botonTransporte");
 botonTransporte.addEventListener("change", ()=>{
     console.log(botonTransporte.value);
 })


  //ELEGIR SALIDA
  const elegirSalida = document.querySelector("#elegirSalida");

  elegirSalida.onchange = ()=>{}
  elegirSalida.addEventListener("change",()=>{
    console.log(`el valor cambio a ${elegirSalida.value}`);
  })
 
  const botonSalida = document.querySelector("#botonSalida");
  botonSalida.addEventListener("change", ()=>{
      console.log(botonSalida.value);
  })

    //ELEGIR DESTINO
    const elegirDestino = document.querySelector("#elegirDestino");

    elegirDestino.onchange = ()=>{}
    elegirDestino.addEventListener("change",()=>{
      console.log(`el valor cambio a ${elegirDestino.value}`);
    })
   
    const botonDestino = document.querySelector("#botonDestino");
    botonDestino.addEventListener("change", ()=>{
        console.log(botonDestino.value);
    })

    // Boton ENVIAR
    const boton = document.querySelector("#btn");

    boton.onclick = (e)=>{
    e.preventDefault();
    console.log("hice submit");
}




// intenté crear un objeto que contenga un array de las provincias con su id
class provincias {
  constructor(nombre, id) {
      this.nombre = nombre;
      this.id = id;
  }
}
let listaProvincias = [
  { nombre: "Ciudad de Buenos Aires", id: "1"},
  { nombre: "Catamarca", id: "2"},
  { nombre: "Chaco", id: "3"},
  { nombre: "Cordoba", id: "4"},
  { nombre: "Corrientes", id: "5"},
  { nombre: "Chubut", id: "6"},
  { nombre: "Entre Rios", id: "7"},
  { nombre: "Formosa", id: "8"},
  { nombre: "Jujuy", id: "9"},
  { nombre: "La Pampa", id: "10"},
  { nombre: "La Rioja", id: "11"},
  { nombre: "Mendoza", id: "12"},
  { nombre: "Misiones", id: "13"},
  { nombre: "Neuquen", id: "14"},
  { nombre: "Rio Negro", id: "15"},
  { nombre: "Salta", id: "16"},
  { nombre: "San Juan", id: "17"},
  { nombre: "San Luis", id: "18"},
  { nombre: "Santa Cruz", id: "19"},
  { nombre: "Santa Fe", id: "20"},
  { nombre: "Santiago del Estero", id: "21"},
  { nombre: "Tierra del Fuego", id: "22"},
  { nombre: "Tucuman", id: "23"}
];
const guardarProducto = () => {
  let nombre = document.getElementById("nombre").value;
  let id = document.getElementById("id").value;
  

  let provincia = new provincias(nombre,id)
  listaProvincias.push(provincia);
}

localStorage.setItem("provincias", JSON.stringify(listaProvincias) );


/*
// USANDO FILTER TRATAR DE USAR FILTRO DE LAS ESPECIFICACIONES DEL USUARIO
function filtroViaje(salida, dias) {
  return salida.filter(objeto => objeto.edad == parseInt(dias));
}
function listaJugadores(jugadores) {
  let lista = '';
  for (const jugador of jugadores) {
      lista += 'JUGADOR ' + jugador.nombre + ' CAMISETA ' + jugador.camiseta + ' EDAD ' + jugador.edad + '\n'
  }
  return lista;
}
for (let index = 0; index < 5; index++) {
  let filtro = filtroViaje(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
  if (filtro.length > 0) {
      alert(listaJugadores(filtro));
  } else {
      alert('NO EXISTE JUGADORES CON ESA EDAD');
  }
}
*/