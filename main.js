
//MENU >>>> INICIAR.HTML
let usuario = prompt("Ingrese su Email");
let contraseña = prompt("Ingrese su Contraseña");
let usuariosAptos = "erikadipietro7@gmail.com";
let contraseñaAptas = 123456789;

    if (usuario  == usuariosAptos && contraseña == contraseñaAptas) {
        alert ("Bienvenido");
} else {
    alert(" Lo sentimos, el usuario y la contraseña no coinciden")
}


const registroNombre = () => {

    let nombreUsuario = prompt("Ingrese un nombre de usuario:");

    while (nombreUsuario == '' || nombreUsuario == null || nombreUsuario.length < 3) {

        nombreUsuario = prompt("Ingreso un valor incorrecto. Por favor, ingrese un nombre de usuario: ")
    }

    return nombreUsuario
}

const registroContrasenia = () => {

    let contraseniaUsuario = prompt("Ingrese una contraseña")

    while (contraseniaUsuario == '' || contraseniaUsuario == null) {
        contraseniaUsuario = prompt("Ingreso una contraseña incorrecta. Por favor, ingrese una contraseña:")
    }

    return contraseniaUsuario
}


function inicioDeSesion() {

    let nombreInicio = prompt("Bienvenido al Inicio de Sesion. Ingrese su Usuario");

    while (nombreInicio != nombreUsuario) {
        nombreInicio = prompt("El usuario que ingreso es incorrecto. Ingrese su nombre de usuario:")
    }

    let contraseniaInicio = prompt("Ingrese su contrasenia");

    while (contraseniaInicio != contraseniaUsuario) {

        contraseniaInicio = prompt("La contraseña que ingreso es incorrecta. Ingrese su nombre de contraseña:")

    }
}





//LUPA BUSCADORA

    //ARRAYS
    


const listaProvincias = ["Ciudad de Buenos Aires", "Catamarca", "Chaco", "Cordoba", "Corrientes", "Chubut", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"];
const listaRegiones = ["Litoral", "Cuyo", "Norte", "Patagonia", "Ciudad de Buenos Aires", "Cordoba"]
//const listaBuscador = ["Donde Ir", "Organiza tu viaje", "Nosotros", "Inicio", "Formas de Pago", "Contacto", "Terminos y condiciones", "Instagram", "Facebook"]

//SALIDA
const listaSalida = [
    { nombre: "Ciudad de Buenos Aires"},
    { nombre: "Catamarca"},
    { nombre: "Chaco"},
    { nombre: "Cordoba"},
    { nombre: "Corrientes"},
    { nombre: "Chubut"},
    { nombre: "Entre Rios"},
    { nombre: "Formosa"},
    { nombre: "Jujuy"},
    { nombre: "La Pampa"},
    { nombre: "La Rioja"},
    { nombre: "Mendoza"},
    { nombre: "Misiones"},
    { nombre: "Neuquen"},
    { nombre: "Rio Negro"},
    { nombre: "Salta"},
    { nombre: "San Juan"},
    { nombre: "San Luis"},
    { nombre: "Santa Cruz"},
    { nombre: "Santa Fe"},
    { nombre: "Santiago del Estero"},
    { nombre: "Tierra del Fuego"},
    { nombre: "Tucuman"}
   
];


console.log(listaSalida.length);

for (let i = 0; i<listaSalida.length; i++ ){
    console.log(listaSalida[i]);
}
let salida = prompt("De que destino saldría?");
let buscarSalida = listaSalida.find(objeto => {
   return objeto.nombre == salida;
})

console.log(buscarSalida);



//DESTINO
const listaBuscador = [
    { nombre: "Ciudad de Buenos Aires"},
    { nombre: "Catamarca"},
    { nombre: "Chaco"},
    { nombre: "Cordoba"},
    { nombre: "Corrientes"},
    { nombre: "Chubut"},
    { nombre: "Entre Rios"},
    { nombre: "Formosa"},
    { nombre: "Jujuy"},
    { nombre: "La Pampa"},
    { nombre: "La Rioja"},
    { nombre: "Mendoza"},
    { nombre: "Misiones"},
    { nombre: "Neuquen"},
    { nombre: "Rio Negro"},
    { nombre: "Salta"},
    { nombre: "San Juan"},
    { nombre: "San Luis"},
    { nombre: "Santa Cruz"},
    { nombre: "Santa Fe"},
    { nombre: "Santiago del Estero"},
    { nombre: "Tierra del Fuego"},
    { nombre: "Tucuman"}
   
];


console.log(listaProvincias.length);

for (let i = 0; i<listaBuscador.length; i++ ){
    console.log(listaBuscador[i]);
}
let search = prompt("A qué provincia desea ir?");
let buscador = listaBuscador.find(objeto => {
   return objeto.nombre == search;
})

console.log(buscador);







// filtro trsnaporte
const listaTransporte = [
    { nombre: "Tren"},
    { nombre: "Avion"},
    { nombre: "Micro"}
   
];


console.log(listaTransporte.length);

for (let i = 0; i< listaTransporte.length; i++ ){
    console.log( listaTransporte[i]);
}
let transporte = prompt("Qué transporte desea usar?");
let buscarTransporte =  listaTransporte.find(objeto => {
   return objeto.nombre ==transporte;
})

console.log(buscarTransporte);



// filtro Dias1

const listaDias = [
    { nombre: "FinDeSemana"},
    { nombre: "1Semana"},
    { nombre: "15Dias"},
    { nombre: "1Mes"}
   
];


console.log(listaDias.length);

for (let i = 0; i< listaDias.length; i++ ){
    console.log( listaDias[i]);
}
let dias = prompt("Qué cantidad de dias desea viajar?");
let buscarDias =  listaDias.find(objeto => {
   return objeto.nombre ==dias;
})

console.log(buscarDias);

