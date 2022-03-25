/*24) Programa una función que dado un arreglo de números
devuelva un objeto con dos arreglos, el primero tendrá los numeros
ordenados en forma ascendente y el segundo de forma descendiente, pe.
 miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
function asc_des(lista = [110,45,-784,45,878,15]){
 
  if (lista.length <= 0 || lista == null || lista ===undefined || (!lista instanceof Array )){
    console.log("Debes enviar una lista de numeros, no puede estar vacia");
  }
  asc = lista.map(ele=>ele).sort()
  des = lista.map(ele=>ele).sort().reverse()
  return {"asc": asc , "des":des}
}

console.log(asc_des());

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
  devolverá ["x", 10, 2, "10", true].*/
function set(lista = ["x", 10, "x", 2, "10", 10, true, true]){
  if (lista.length <= 0 || lista == null || lista ===undefined || (!lista instanceof Array )){
    console.log("Debes enviar una lista de numeros, no puede estar vacia");
  }
  res = new Set(lista);
  return res
}

console.log(set());

/*26) Programa una función que dado un arreglo de números obtenga el promedio,
 pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
 function promedio(lista = [9,8,7,6,5,4,3,2,1,0]){
   if (lista.length <= 0 || lista == null || lista ===undefined || (!lista instanceof Array )){
    console.log("Debes enviar una lista de numeros, no puede estar vacia");
  }
  acum = 0
  for(i=0;i<lista.length;i++){
    acum += lista[i]
  }
  return acum/lista.length
 }

 console.log(promedio());