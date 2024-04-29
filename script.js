/* alert("HOLA HUMANO");
let nombreUsuario = prompt("Ingrese su nombre: ")
alert(`Hola ${nombreUsuario}`)
 */
let a = 2; // number
let nombre = "Esteban"; //string
let verdadero = true; //boole
let aFloante = 1.1 // Number

console.log(1 - 1)
console.log("esteban" - 1)
console.log("esteban" + 1)
console.log("1" + 1)
console.log("1" - 1)
console.log(0.7 + 0.1)

//estructura if, else if, estructura for, metodos de arrays

if (a == 1) { //un if
    console.log("son iguales")
} else if (a != 1) { //todos los else if que yo quiera
    console.log("no son iguales")
} else { //un else
    console.log("error de sistema")
}

function cumpliAnios(fecha){
    if (fecha == "27/01"){
        console.log("Feliz cumpleaños Steve")
    }
}

cumpliAnios("27/01")

//for
// variable contadora, condición, variación
for (let i = 0; i<10; i++){
    console.log(i)
}
const NUMEROS = [1,2,3,4,5,6]

// len(NUMEROS)
for (let j = 0; j<NUMEROS.length;j++){
    NUMEROS[j] += 1
}
console.log(NUMEROS)

for (k = 0; k<nombre.length;k++){
    console.log(nombre[k])
}

console.log(`el valor de la variable verdadero es: ${verdadero}`)//back tick

// Metodos de array

NUMEROS.push(8)//agrega un numero al final
NUMEROS.pop()//elimina el ultimo numero del array

let final = NUMEROS.pop()
console.log(final)

NUMEROS.shift()//elimina el primer elemento
NUMEROS.unshift(1)//agrega un elemento al principio del array
console.log(NUMEROS.indexOf(3))
console.log(NUMEROS)

function mostrarIndice(ARRAY,valorBuscado){
    for (let i = 0; i <ARRAY.length;i++){
        if (ARRAY[i] == valorBuscado){
            return i
        }
    }
}

console.log(mostrarIndice(NUMEROS,3))

const NUMEROSPORMIL = NUMEROS.map(function (falopa){ return falopa * 1000})
console.log(NUMEROSPORMIL)

const REDUCIDO = NUMEROS.reduce(function (a,b){return a + b})
console.log(REDUCIDO)