let array1=[1,2,3]
console.log(array1)
console.log(array1[0])

//metodos de array
//POP: elimina el ultimo elemento
array1.pop()

//PUSH: añade un elemento al array
array1.push(3.14)
console.log(array1)

//SHIFT: elimina el primer elemento del array
//UNSHIFT: agrega un elemento al principio del array
console.log(array1)

//undefined: valor que no esta definido

//indexof:
console.log(array1.indexOf(3.14))

//Reverse: devuelve el array en reversa (destruye el array original)

for(let x=0; x<10;x++){
    console.log(x);
}

//CONTACTO//
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.com+$/,
	telefono: /^[0-9\-]{7,14}$/, // 7 a 14 numeros.
	mensaje: /^[a-zA-Z0-9]{1,290}$/
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	mensaje:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if( campos.nombre && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();
		document.getElementById('popup').classList.add('formulario-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('popup').classList.remove('formulario-mensaje-exito-activo');
		}, 10000);

		document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario-grupo-correcto');
		});
	} else {
		document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
		}, 5000);
	}
});


