
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

const boton = document.querySelector("#btn");
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

boton.onclick = () =>{
    obtenerDatos();
}

















/*

//esto no va

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
//clave que tuve que generar en la pagina de la api
const apiKey = "37925246d4deb4e4f6d6f460299efb31";

form.addEventListener("submit", e => {
  e.preventDefault();
  const listItems = list.querySelectorAll(".ajax-section .city");
  const inputVal = input.value;

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Lo sentimos, no tenemos datos de ese lugar 😩";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});

*/