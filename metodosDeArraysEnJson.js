const ARRAY1 = [] // arreglo py: lista
let estudiante = {} // objeto py: diccionario

let persona = {
    nombre:"Esteban",
    apellido: "Piazza"
}
console.log(persona.nombre)
const NOTAS = [1,2,3,4]

const ESTUDIANTES = [
    {nombre:"Miguel",apellido:"Mazzitelli",edad:27,Genero:"M"},
    {nombre:"Milagros", apellido:"De la fuente",edad:20,Genero:"F"},
    {nombre:"Salva", apellido: "Correa",edad:19,Genero:"M", cambiarGenero: function(){
      this.Genero = "F"  
    }},
]

function es31 (array){
    for (let i = 0; i<array.length;i++){
        array[i].edad = array[i].edad + 1
    }
}

function discriminarMujeres(array){
    let listaHombres = []
    for (let i = 0;i<array.length;i++ ){
        if(array[i].Genero === "M"){
            listaHombres.push(array[i])
        }
    }
    return listaHombres
}

let listaDeHombres = discriminarMujeres(ESTUDIANTES)
console.table(listaDeHombres)


console.table(ESTUDIANTES)
es31(ESTUDIANTES)
console.table(ESTUDIANTES)
ESTUDIANTES[2].cambiarGenero
console.table(ESTUDIANTES)
/*
Javascript:   array de objetos literales y metodos sobre los mismos / 
*/


/// localstorage
/* 
localStorage.setItem("ejemplo",1)
console.log(localStorage.getItem("ejemplo"))
localStorage.removeItem("ejemplo")
localStorage.clear(); */

// JSON 

console.log(ESTUDIANTES)
let ESTUDANTESSTRING = JSON.stringify(ESTUDIANTES)
console.log("ACA: " + ESTUDANTESSTRING)

console.log(JSON.parse(ESTUDANTESSTRING))

// API 

///  formsubmitter





