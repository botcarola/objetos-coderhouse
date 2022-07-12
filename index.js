// funcion ---> bucle ----> condicional // DESAFÍO OBLIGATORIO

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0){
//         console.log(i)
//     } else if ( i % 2 !== 0 ){
//         console.log(i)
//     }
// }

// funcion que saluda 

function saludar (nombre) {
    console.log( `Hola ${nombre}`)
}

// saludar("Azucena")
// saludar("Fernando")


// simulacro de desafío entregable

function numerosParesOImpares ( numero, parOImpar ) { // parámetros

    for (let i = 0; i <= numero; i++){

        if ( parOImpar === "par" &&  i % 2 === 0 ){
            console.log(i)
        } else if ( parOImpar === "impar" && i % 2 !== 0 ) {
            console.log(i)
        }
    }
}

// numerosParesOImpares(10, "par") // llamado, invocación o ejecución de la función
// numerosParesOImpares(20, "impar")
// numerosParesOImpares(100, "impar")

// OBJETOS LITERALES

const nombre = "Lucía";
const apellido = "Beliera";
const edad = 27;
const altura = 1.80;
const gustoDeHelado = "menta con chocolate";
const esTutora = true;

// los objetos son colecciones de propiedades y métodos que se relacionan entre sí
// estas propiedades contienen valores que identifican a este objeto

const personaInventada = {

    nombre: "Lucía",
    apellido: "Beliera",
    edad: edad,
    altura: altura,
    gustoDeHelado: gustoDeHelado,
    esTutora: esTutora,
    mascotas: ["Pepito", "Panka", "Hideo Kojima"],
    familia: {
        papa: "Marcelo",
        mama: "Carola"
    },
    saluda: () => console.log("Hola")
}

const clonPerverso = {

    nombre: "Lucía",
    apellido: "Beliera",
    edad: edad,
    altura: altura,
    gustoDeHelado: gustoDeHelado,
    esTutora: esTutora,
    mascotas: ["Pepito", "Panka", "Hideo Kojima"],
    familia: {
        papa: "Marcelo",
        mama: "Carola"
    },
    saluda: () => console.log("Hola")
}


// como obtener datos de los objetos con .

console.log(personaInventada)

console.log(personaInventada.edad)

console.log(personaInventada.esTutora)

console.log(personaInventada.familia.mama)

console.log(personaInventada.mascotas[2])

// bracket notation

console.log(personaInventada["nombre"])

console.log(personaInventada["apellido"])

console.log(personaInventada["familia"]["mama"])

console.log(personaInventada["mascotas"][1])

// comparación entre objetos

// siempre que comparemos los identificadores de los objetos entre sí, va a ser falses

console.log(personaInventada === clonPerverso) // false, acá estoy comparando las referencias

console.log(personaInventada.nombre === clonPerverso.nombre) // true , acá estoy comparando los valores


// reasignar las propiedades

clonPerverso.nombre = "Nadia"

console.log(clonPerverso.nombre)

clonPerverso.mascotas[2] = "Martina"

console.log(clonPerverso.mascotas)

// borrar propiedad

delete clonPerverso.familia

console.log(clonPerverso)

// función constructora, me va a permitir poder instanciar nuevos objetos

function Persona ( nombre, apellido, edad, altura, colorDePelo, gustosMusicales, mascotas) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    this.colorDePelo = colorDePelo;
    this.gustosMusicales = gustosMusicales;
    this.mascotas = mascotas;
    
}

const persona1 = new Persona( "Francisco", "Gómez", 21, 1.85, "Castaño", {banda1: "Pink Floyd", banda2: "saldkjsad"}, ["Kojima", "Panka"] )
const persona2 = new Persona() // si no agregamos los argumentos, todos los valores de las propiedades van a ser undefined
const persona3 = new Persona("Alejo", "Aasdsf", 20, 1.69, "Rubio", {banda1: "apsid", banda2: "asodjosiad"}, ["asldsad", "psaidaspid"])

console.log(persona3)

// elemento que me permite impactar info de js en html

document.write(persona1.nombre)

// métodos en funciones constructoras

const saludarAPablo = new objetoQueSaluda("Pablo")
console.log(saludarAPablo, saludarAPablo.saludo())

function objetoQueSaluda (nombre) {

    this.nombre = nombre;
    this.saludo = () => console.log(`Hola ${this.nombre}`)
}

const saludarAMariela = new objetoQueSaluda( "Mariela ")

saludarAMariela.saludo()

// in(en) devuelve un booleano si se encuentra cierta propiedad dentro de un objeto

console.log("nombre" in saludarAMariela)
console.log("edad" in saludarAMariela)

// for in

const numeros = {
    a: 10,
    b: 50,
    c: 100
}

// for in, es un método que me va a permitir interactuar con las propiedades que contenga un objeto

for (const numero in numeros) {
    
    console.log(numeros[numero])
}

// class y constructor

// function saludar () { // declaración de función

// }

// ESTA FORMA DE DECLARAR NO ES LA MISMA

// const saludemos = () => {

// }

// const saludando = function () {

// }

// no puedo acceder a la instancia de un objeto con class, antes de su inicialización

// const ensaladaDeMitchell = new EnsaladasDeFrutas("Pomelo", "Papaya", "Durazno", "Kiwi")
// console.log(ensaladaDeMitchell)

class EnsaladasDeFrutas {

    constructor ( fruta1, fruta2, fruta3, tipoDeJuguito ) {

        this.tipoDeFruta1 = fruta1;
        this.tipoDeFruta2 = fruta2;
        this.tipoDeFruta3 = fruta3;
        this.jugoExtra = tipoDeJuguito;
    }

    hacerEnsalada () {
        return console.log(`La ensalada de fruta es de: ${this.tipoDeFruta1}, ${this.tipoDeFruta2}, ${this.tipoDeFruta3} y tiene un juguito de ${this.jugoExtra}`)
    }
}

const ensaladaDeFrutaCarola = new EnsaladasDeFrutas( "Banana", "Naranja", "Durazno", "Naranja")

ensaladaDeFrutaCarola.hacerEnsalada()

// actividad grupal

// generar una función constructora o clase que me permita instanciar cinco objetos nuevos. Ejemplo: 

// new Cliente ("Carola", "Elizabeth", 27, "Calle Falsa 123", 5555, "Sarasa", "Argentina", "Soltera")


class Personal{

    constructor(nombre,apellido, edad, domicilio, codigoPostal, ciudad, pais, estadoCivil){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.domicilio=domicilio;
        this.codigoPostal=codigoPostal;
        this.ciudad=ciudad;
        this.pais=pais;
        this.estadoCivil=estadoCivil;
    }
    
}

const persona11 = new Personal("Fernando", "Mendez", 33, "Paysandu 1992", 1714, "Buenos Aires","Argentina","Casado")
 console.log(persona11);


 class Clientes {
    constructor(nombre, apellido, edad, domicilio, codigoPostal, ciudad, pais, estadoCivil) {
        this.nombre = nombre
            this.apellido = apellido
            this.edad = edad
            this.domicilio = domicilio
            this.codigoPostal = codigoPostal
            this.ciudad = ciudad
            this.pais = pais
            this.estadoCivil = estadoCivil
    }

   mostrandoClientes () {
    console.log (`${this.nombre}, ${this.apellido}, ${this.edad}, ${this.domicilio}`)
}  
}

const cliente1 = new Clientes ("Raul", "Davila", 28, "Lobos1254", 4547, "caracas", "Venezuela", "Viudo" )
const cliente2 = new Clientes("Juan" , "Suarez", 23, "Belgrano 224", "4000", "tucuman", "argentina" , "soltero")
const cliente3 = new Clientes ("Juan", "Sánchez", 19, "Rosales", 231, "Caballito", "Argentina", "Casado")
const cliente4 = new Clientes ("maria", "Pereyra",26, "bucardo 142", 5221, "cordoba", "argentina", "casada")
const cliente5 = new Clientes ("Emilio", "Ansaldi", 35, "Córdoba 1234", "Santa Fe", "Argentina", "Casado")

cliente2.mostrandoClientes()







