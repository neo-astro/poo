const ps = require('prompt-sync')
const input = ps()
const print = msg => console.log(msg)


const continuar = () =>{
  input("\nCONTINUAR..ENTER")
  console.clear()
  mostrar_ejercicios2()
}


const borrar_msg = msg =>{
  console.clear()
  print(msg+ `\n`)
  mostrar_ejercicios2()
}

/*5) Programa una función que invierta las palabras de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

function inveritr_Cadena(){
  res5 = require("./cadena_basic").cadena()
  res5 = (res5.split("")).reverse()
  return res5.join("")
}


/*6) Programa una función para contar el número de veces que se repite 
una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
 devolverá 2.*/
 function contar_palabras(){
  res6 = new require("./cadena_basic").cadena()
  print("Escribe la palabra en la siguiente cadena para buscar")
  palabra = new require("./cadena_basic").cadena()
  let lista = res6.split(" ")
  n_veces = 0
  lista.forEach(function(elemento){
    palabra === elemento? n_veces++ : n_veces
  })
  return `El numero veces que se repite ${palabra} es : ${n_veces} veces`
}
  




/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

/* src= ./palindromo.js/  */


/*8) Programa una función que elimine cierto patrón de caracteres de un texto
 dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
  devolverá  "1, 2, 3, 4 y 5.
*/

function conjunto(){
  print(`Debes escribe el patron seguido del signo ","`)
  res8 = new require("./cadena_basic").cadena()
    if (!res8.includes(",")){
      print("No ingresaste el patron")
      return new conjunto()
    }
  lista = res8.split(",") 
  lista_new = lista.map(function(ele){
    return (ele.trim())
  })
  data =  lista_new[0].replace(new RegExp(lista_new[1], "g"),"")
  
print(`Tu cadena ahora es : ${data}`)
}





/*-----------run------------*/ 
function mostrar_ejercicios2(){
print(`========Ejercicios=========
1: Programa una función que invierta las palabras de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

2: Programa una función para contar el número de veces que se repite 
una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
devolverá 2.

3:  Programa una función que valide si una palabra o frase dada, es un palíndromo
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

4: Programa una función que elimine cierto patrón de caracteres de un texto
dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
devolverá  "1, 2, 3, 4 y 5.

5: Salir`);
  const ejer2 = input("Eliga una opccion: ").trim()
  switch(ejer2){ 
    case `1`:  
      let res5 = inveritr_Cadena()
      print(`La cadena ahora es: `)
      print(res5)
      continuar()
      break
    case `2`:
      print(contar_palabras())
      continuar()
      break
    case `3` :
      print(`Tu cadena es palindromo: ${(new require("./palindromo.js").palindromo())[0]}`)
      continuar()
      break
    case `4`:
      print(conjunto())
      continuar()
      break
    case `5`:
      print("Hasta luego")
      process.exit()
      break
    default:
      borrar_msg("Elige una opcion valida!")      
}}

mostrar_ejercicios2()