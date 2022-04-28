/*let usuario = prompt("Ingrese su Email");
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
*/

// FUNCION DE INICIO DE SESION PRUEBA (NO ANDA BIEN)



  //LOCAL STORAGE INICIO DE SESION
  function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
   }
   
   function recuperarDatos(){
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
     document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
    }
    else{
     document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
   }

  