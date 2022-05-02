
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



