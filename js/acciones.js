// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){ 
$('#btndatos').on('click',function(){
    alert('Hola'); 
	$('body').pagecontainer("change","#datos",{transition:"flip"});
    });//cierra btndatos/	  
//}); 
});

$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){ 
$('#btnresultado').on('click',function(){
     var imc;
 var peso=$('#txtpeso').val();
 var talla=$('#txtpeso').val();
   imc=(peso/(talla*talla));
 $('#imc').text('nombre '+$('#txtnombre').val()+' imc= '+imc);  
 $('body').pagecontainer("change","#resultado",{transition:"flip"});
   	  
 
    });//cierra btnresultado/
   
//});   
});

