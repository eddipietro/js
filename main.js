/*
//MENU >>>> INICIAR.HTML
let usuario = prompt("Ingrese su Email");
let contraseña = prompt("Ingrese su Contraseña");
let usuariosAptos = "erikadipietro7@gmail.com";
let contraseñaAptas = 123456789;

    if (usuario   == usuariosAptos && contraseña == contraseñaAptas) {
        alert ("Bienvenido");
} else {
    alert(" Lo sentimos, el usuario y la contraseña no coinciden")
}

*/

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
    
const listaTransporte = ["Tren", "Avion", "Micro"];
const listaDias = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ];
const listaProvincias = ["Ciudad de Buenos Aires", "Catamarca", "Chaco", "Cordoba", "Corrientes", "Chubut", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"];
const listaRegiones = ["Litoral", "Cuyo", "Norte", "Patagonia", "Ciudad de Buenos Aires", "Cordoba"]
//const listaBuscador = ["Donde Ir", "Organiza tu viaje", "Nosotros", "Inicio", "Formas de Pago", "Contacto", "Terminos y condiciones", "Instagram", "Facebook"]

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

for (let i = 0; i<listaProvincias.length; i++ ){
    console.log(listaProvincias[i]);
}
let search = prompt("Que desea buscar?");
let buscador = listaProvincias.find(objeto => {
   return objeto.nombre == search;
})

console.log(buscador);