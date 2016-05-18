// JavaScript Document
$(document).ready(function(e) {
//watchID se refier a actual
	
var WatchID=null;
document.addEventListener("deviceready",Dispositivo_Listo,false);
	
//cuando esta listo el dispositivo
function Dispositivo_Listo(){
Comienza();
}
	
//Empieza la observacion de la aceleracion
function Comienza(){
		
//Actualiza la aceleracion cada 2 segundos
//
var opciones={frequency:2000};
		
WatchID=navigator.accelerometer.watchAcceleration(Correcto,Error,opciones);
navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
}
//Detiene la observacion de la aceleracion
	
function Detener(){
if(watchID){
navigator.accelerometer.clearWatch (WatchID);
watchID=null;
}
}
//Correcto:Toma una captura de la acerleracion
function Correcto(acceleration){
var element=document.getElementById('acelerometro');

element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
'Aceleracion en Y:'+acceleration.y+'<br/>'+
'intervalo:'+acceleration.timestamp+'<br/>';
}

//eRROR:FALLA al obtener la aceleracion
function Error(){
	alert('Error!');
}
//Exito al localizar
function Localiza(posicion){
	var element=document.getElementById('geolocalizacion');
	element.innerHTML='Latitud:'+posicion.coords.latitude +'<br/>'+
	'Longitud:'+posicion.coords.longitude +'<br/>'+
	'Precision:'+posicion.coords.accuracy +'<br/>'+
	'Intervalo:'+posicion.timestamp +'<br/>';
}
//Error en la geolocalizacion
function ErrorLocalizacion(error){
alert('codigo:'+error.code +'\n'+
'mensaje:'+error.message+'\n');
}
});//document ready
