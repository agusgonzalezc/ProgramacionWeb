$ = function(id) {
	return document.getElementById(id);
}
var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
	location.reload();
}
// EJEMPLO CLASE
function guardar() {
	let nombre=document.getElementById("nombre").value;
	localStorage.setItem("nombre",nombre);
}
function borrarData() {
	localStorage.clear();
	document.getElementById("nombre-usuario").value = "";
}
window.onload = function cargardatos(){
	document.getElementById("nombre").value = localStorage.getItem("nombre");
}

// VALIDACION
let nombreError = document.getElementById("nombre-error");
let emailError = document.getElementById("email-error");
let mensajeError = document.getElementById("mensaje-error");
let submitError = document.getElementById("submit-error");

function validacionNombre(){
	let nombre = document.getElementById("nombre-usuario").value
	let caja = document.getElementById("nombre-usuario");
	let correcto = document.getElementById("nombre-correcto");
	if(nombre==""){
		nombreError.innerHTML = "La casilla no puede estar vacia";
		caja.style.border='3px solid #555';
		caja.style.borderColor= '#ae1c28';
		caja.style.backgroundColor= "#ae1c2854";
		correcto.innerHTML ="";
		return false;
	}
	if(!nombre.match(/^[a-zA-ZÀ-ÿ\s]{4,40}$/)){
		nombreError.innerHTML = "El nombre debe tener entre 4 y 40 digitos";
		caja.style.border='3px solid #555';
		caja.style.borderColor = "#ae1c28";
		caja.style.backgroundColor= "#ae1c2854";
		correcto.innerHTML ="";
		return false;
	}
	nombreError.innerHTML="";
	caja.style.border= '3px solid #555';
	caja.style.borderColor = '#4bc93b';
	caja.style.backgroundColor= "#4cc93b66";
	correcto.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}
function validacionEmail(){
	let email = document.getElementById("email-usuario").value;
	let caja = document.getElementById("email-usuario");
	let correcto = document.getElementById("email-correcto");
	if(email==""){
		emailError.innerHTML = "La casilla no puede estar vacia";
		caja.style.border='3px solid #555';
		caja.style.borderColor= '#ae1c28';
		caja.style.backgroundColor= "#ae1c2854";
		correcto.innerHTML ="";
		return false;
	}
	if(!email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
		emailError.innerHTML = "El formato de mail no es valido";
		caja.style.border='3px solid #555';
		caja.style.borderColor= '#ae1c28';
		caja.style.backgroundColor= "#ae1c2854";
		correcto.innerHTML ="";
		return false;
	}
	emailError.innerHTML = "";
	correcto.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	caja.style.borderColor = "#4bc93b";
	caja.style.backgroundColor= "#4cc93b66";
	return true;
}
function validacionMensaje(){
	let mensaje = document.getElementById("mensaje-usuario").value;
	let caja = document.getElementById("mensaje-usuario");
	let correcto = document.getElementById("mensaje-correcto");
	if(mensaje==""){
		mensajeError.innerHTML = "La casilla no puede estar vacia";
		caja.style.border='3px solid #555';
		caja.style.borderColor= '#ae1c28';
		caja.style.backgroundColor= "#ae1c2854";
		correcto.innerHTML="";
		return false;
	}
	if(!mensaje.match(/^.{12,1000}$/)){
		mensajeError.innerHTML = "El mensaje debe ser entre 12 y 1000 digitos";
		caja.style.border='3px solid #555';
		caja.style.borderColor= '#ae1c28';
		caja.style.backgroundColor= "#ae1c2854";
		correcto.innerHTML="";
		return false;
	}
	mensajeError.innerHTML = "";
	correcto.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	caja.style.borderColor = "#4bc93b";
	caja.style.backgroundColor= "#4cc93b66";
	return true;
}
function validacionForm2(){
	let nombre = document.getElementById("nombre-usuario").value;
	let email = document.getElementById("email-usuario").value;
	let mensaje = document.getElementById("mensaje-usuario").value;
	if(nombre=="" || email=="" || mensaje==""){
		validacionNombre();
		validacionEmail();
		validacionMensaje();
		submitError.style.display='block';
		submitError.innerHTML='Error. Por favor rellene las casillas';
		return false
	}
	if(!validacionNombre() || !validacionEmail() ||!validacionMensaje()){
		submitError.style.display='block';
		submitError.innerHTML='Error. Revise las casillas';
		return false
	}
	if(validacionNombre() && validacionEmail() && validacionMensaje){
		document.getElementById("nombre-usuario").value = "";
		document.getElementById("email-usuario").value = "";
		document.getElementById("mensaje-usuario").value = "";
		show('popup');
		return false
	}
}
