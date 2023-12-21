
$.getJSON("./js/menu.json", function(json){
    if(!localStorage.getItem("lang")){
        localStorage.setItem("lang","en");
    }
    let def = localStorage.getItem("lang"); 
    //alert(`Estic en el script. La variable def val:  ${def}`);
    // alert(typeof(def));
    $('.lang').each(function(index,value){
        $(this).text(json[def][$(this).attr('key')]);
   
    }); //cierra el each

$('.translate').click(function(){
    //alert("estoy en el script, dentro de translate");
    let lang = $(this).attr('id');
    localStorage.setItem("lang",lang);
    $('.lang').each(function(index,value){
        $(this).text(json[lang][$(this).attr('key')]);
    }); //cierra el each
 }); //cierra el click
}); //cierra json

//https://www.youtube.com/watch?v=DOD_tLSkD58
// https://www.youtube.com/watch?v=C6kTnJuLwYc  está muy bien
// web del servidor xampp
//https://www.youtube.com/watch?v=HiXLkL42tMU    git o github

