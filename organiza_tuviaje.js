const elegirDias = document.querySelector("#elegirDias");




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

    //ENVIAR
    const boton = document.querySelector("#btn");

    boton.onclick = (e)=>{
    e.preventDefault();
    console.log("hice submit");
}