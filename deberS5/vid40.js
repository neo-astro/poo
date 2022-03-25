
/*21) Programa una función que dado un array numérico devuelve
 otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5])
  devolverá [1, 16, 25].*/

function elevar(lista = [1,2,3]){
    lista2 = lista.map(function(x){return x**2})
    console.log(lista2);
}


/*22) Programa una función que dado un array devuelva el número mas alto 
y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

function max_min(array = [100,-10,0,700]){
    var max = Math.max.apply(Math, array)
    var min = Math.min.apply(Math, array)
    return [max, min]
}


/*23) Programa una función que dado un array de números devuelva un
 objeto con 2 arreglos en el primero almacena los números pares y en el 
 segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
 devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i*/

function array_par_impar(array = [10,20,40,95,45]){
    par = array.filter(function(x){
        if (x%2 == 0 && x!==0 && x !==1){
            return x
        }
    })
    impar = array.filter(function(x){
        if (x%2 !== 0 && x!==0){
            return x
        }
    })
    return {"par":par,"impar":impar}
}
console.log(array_par_impar());