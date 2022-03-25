const { cadena } = require("./cadena_basic")

/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
function contar_vocales_consonantes(){
    
    var cadena = new require("./cadena_basic.js").cadena("Escribe una cadena: ","Debes escribir una cadena!")
    cadena = cadena.toLowerCase()
    const n_vocales = cadena.match(/[aeiou]/gi).length;
    const n_consonantes = cadena.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;
    return `Numero de vocales = ${n_vocales}, numero de conosantes = ${n_consonantes}`
}

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
function validar_nombre(){
    nombre = new require("./cadena_basic.js").cadena("Escribe una cadena: ","Debes escribir una cadena!")
    if ((nombre.match(/[^a-z\s]/g)) != null   ) {
        return false
    }else {
        return true
    }
}

/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
function validar_correo(){
    correo = new require("./cadena_basic.js").cadena("Escribe tu correo: ","Debes escribir un correo!")
    if (correo.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null){
        return true
    } else {
        return false
    }
}

