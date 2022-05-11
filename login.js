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




//LIBRERIA JQUERY
 //INICIO DE SESION Y REGISTRO DE CUENTA
$(document).ready(function(){
    
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        let $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
                } else {
                label.removeClass("highlight");   
                }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } 
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600); //Muestra los elementos coincidentes desvaneciéndolos a opacos

    });
    
});
