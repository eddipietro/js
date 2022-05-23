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


//FETCH 1

let button = document.querySelector("#btn");
const container = document.querySelector(".container");

//const obtenerDatos = ()=>{
    // fetch(url, comfiguracion opcional)
//    fetch("fetch.txt")
//        .then(response => response.text())
//        .then(result => container.innerHTML += `<p>${result} </p>`)
//        .catch(error => console.log(error))
//}


const obtenerDatos = ()=>{
    // fetch(url, configuracion opcional)
    fetch("https://ws.smn.gob.ar/map_items/weather")
        .then(response => response.json())
        .then(result => {
            let fetch = result;
            fetch.forEach(user => {
                container.innerHTML += `
                    <h3> ${user.province}</h3>
                    <p>${user.weather.description}</p>
                    <p>${user.weather.tempDesc}</p>
                `
            })
        })
        
        .catch(error => console.log(error))
}




