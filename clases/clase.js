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

//Tomar el valor que ingresa el usuario
let edad=0;
edad=document.getElementById("age").value;
//Almaceno el valor
localStorage.setItem("edad_usuario",edad);
localStorage.getItem("edad_usuario");
localStorage.clear();//borrar todos
localStorage.removeItem("edad_usuario"); //borrar un dato
window.onload


