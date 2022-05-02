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


//CLASES 
class provinciaBsAs {
    constructor(id, nombre, descripcion, video, ubicacion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.video = video;
        this.ubicacion = ubicacion
    }
}


const provinciaBsAs = [];

let buenosAires = new buenosAires(bsAs, "Cuidad de Buenos Aires", " Las aguas del Río de la Plata bañan su costa. Su faceta cultural se ve reflejada en la gran cantidad y variedad de museos, teatros, galerías artísticas y bibliotecas. Cuna de importantes tradiciones como el tango o el dulce de leche. Las atracciones turísticas de Buenos Aires son muy variadas. Camina de noche por la Avenida Corrientes y siente la vibración que genera esa enorme avenida iluminada, con sus teatros, librerías, cines y restaurantes, y haz una parada en la emblemática Pizzería “Güerrín”, para probar una de las mejores pizzas de la ciudad y conocer su local, del año 1930. Buenos Aires es una ciudad que sorprende y que seguro gustará a quienes busquen cultura, tradición e historia, como también vida nocturna, o una gastronomía de excelencia. En esta guía práctica de la ciudad te brindamos información confiable y actualizada que te ayudará a planificar tu viaje de la manera más sencilla.", 
"https://www.youtube.com/embed/K7LvFwNYRZE","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.68169354682!2d-58.573384856312614!3d-34.6157436871128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1643563050607!5m2!1ses-419!2sar")

 //

 class provinciaCatamarca {
    constructor(id, nombre, descripcion, video, ubicacion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.video = video;
        this.ubicacion = ubicacion
    }
}


const provinciaCatamarca = [];

let catamarca = new catamarca (catamarca, "Catamarca", "La multiplicidad de paisajes, acompañados de una riqueza histórica y cultural única, hacen de Catamarca un excelente destino para visitar durante todo el año. Te invitamos a descubrir sus principales tesoros en una experiencia que involucra todos los sentidos y torna inolvidables los coloridos paisajes y las anécdotas del lugar. Una provincia con servicios turísticos de calidad que permiten vivir experiencias auténticas y únicas en forma segura y sustentable, bañadas por el celeste eterno del cielo y un sol omnipresente y por una noche limpia e iluminada por la luna y un océano de estrella  y todo con un inigualable valor agregado, la calidez, hospitalidad y simpatía del pueblo catamarqueño. Ingresá en cada Región para conocer lo qué podes hacer en la provincia.",
"https://www.youtube.com/embed/jDIF8A0snbk","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56119.26232290065!2d-65.81086853830138!3d-28.46587429045676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428bf1d0f9fcd%3A0x7e1edd4b1609861a!2sSan%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1643837146834!5m2!1ses-419!2sar")


provinciaBsAs.push(buenosAires, catamarca);

const contenedorProvincias = document.getElementById("contenedorProvincias")

function mostrarProvincias(){ 
    provinciaBsAs.forEach(buenosAires => {
    contenedorProvincias.innerHTML +=  ` 
    <h1 class="animate__animated animate__pulse" id="bsAs">${buenosAires.nombre}</h1>
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <p class="descripcionProvincias animate__animated animate__pulse">${buenosAires.descripcion}</p>

        </div>
        <div class="columnaVideo">
          <iframe id="video" src=${buenosAires.video} title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <iframe id="map"
      src=${buenosAires.ubicacion}
      style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    
    `;

});
}


mostrarProvincias()
