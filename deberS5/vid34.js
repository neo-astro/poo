const ps = require('prompt-sync');
const input = ps()
const print = msg => console.log(msg)




const continuar = () =>{
  input("\nCONTINUAR..ENTER")
  console.clear()
  mostrar_ejercicios()
}

const borrar_msg = msg =>{
  console.clear()
  print(msg+ `\n`)
  mostrar_ejercicios()
}


function pedir_numero(){
  let n = input("Cuantas veces quieres repetir: ")
  n = parseInt(n)
  try{
    if (n<0){
      throw new Error("Debes escribir numero positivo")
    }else if(!(n===parseInt(n))){
    throw new Error("Debes escribir numeros!")
    }
    }catch(e){
      print(e.message)
      return new pedir_numero()
    }
  return n
  
  
}


/*1) Programa una función que cuente el número de caracteres de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá 10.*/

/* src=""*/ 


/*2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/
function recortar_cadena(){
  let res2 = new require("./cadena_basic.js").cadena("Escribe una cadena: ","Debes ingresasr una cadena!")
  print("Escribe el numero de elementos que quieres que se muestren")
  limite = require("./pedir_numero.js").numero("Escribe un numero: ","Debes escribir un numero!")
  if (limite >res2.length){
    print("El numero de caracteres excede a la longitud de la cadena")
    return recortar_cadena()
  }
  if (limite > 0){
    return res2.substring(0,limite)
  }else{
    print("DEBES INGRESAR UN NUMERO VALIDO Y MAYOR A 0!")
    return recortar_cadena()
  }
  
}
/*3) Programa una función que dada una String te devuelva un Array de textos separados
 por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
function string_to_array (){
  let res3 = new require("./cadena_basic").cadena("Escribe una cadena: ","Debes ingresasr una cadena!")
  print("Escribe el signo con el que agruparas los elementos a lista")
  agrupador = input("Signo: ")
  return res3.split(agrupador)

}


/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.*/

exports.repetir = function repetir(){
  let res = new require("./cadena_basic").cadena("Escribe una cadena: ","Debes escribir algo!") 
  var acu = ""
  n = require("./pedir_numero.js").numero("Escribe un numero: ","Debes escribir un numero!")
  if(n>1){
    for (let i = 0; i < n ; i++){
    acu +=  `${res} `}
  return acu
  }else {
    print("Debes escribir un numero mayor a 1")
    return require("./vid34.js").repetir()
  }
  
  
}



/*-----------run------------*/ 

function mostrar_ejercicios(){
  print(`========Ejercicios=========
1: Cuente el número de caracteres de una cadena
2: Devuelver el texto recortado
3: Dada una String te devuelva un Array
4: Repita un texto X veces
5: Salir`);
  const ejer1 = input("Escribe una opcion: ")
  switch(ejer1){ 
    case `1`:  
      let res1 = new require("./cadena_basic").cadena("Escribe una cadena: ","Debes escribir una cadena")
      print(`La cadena : ${res1}`)
      print(`tiene: ${res1.length} caracteres incluyendo espacios`)
      continuar()
      break
    case `2`:
      print(`Tu nueva cadena incluyendo espacios es: ${recortar_cadena()}`)
      continuar()
      break
    case `3` :
      res3= string_to_array()
      print(`Esta es tu lista`)
      print(res3)
      continuar()
      break
    case `4`:

      print(`Este es el resultado!\n${require("./vid34.js").repetir()}`)
      continuar()
      break
    case `5`:
      print("Hasta luego")
      process.exit()
      break
    default:
      borrar_msg("Elige una opcion valida!")      
}}



mostrar_ejercicios()