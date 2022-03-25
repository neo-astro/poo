/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
 o no, pe. miFuncion(7) devolverá true.*/
function primo(){
    res12 = require('./pedir_numero.js').numero("Escribe un numero: ","DEBES ESCRIBIR UN NUMERO!");
    if(res12 >= 0){
        if(res12 ==1){
            return `El numero ${res12} no es primo`
        }
        for (var i = 2; i < res12; i++) {
            if (res12%i==0){
            return `El numero ${res12} no es primo`;}
        };
    return `El numero ${res12} es primo`;

    }else {
        console.log("Escribe un numero no negativo");
        primo()
    }
}

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
function par_impar(){
    res13 = require('./pedir_numero.js').numero("Escribe un numero: ","DEBES ESCRIBIR UN NUMERO!");
    if (res13 % 2 == 0 && res13 != 0) {
        return `El numero ${res13} es par`
    }else if ((res13 != 0 && res13 % 2 != 0) || res13 == 1 ) {
        return `El numero ${res13} es impar`
    }else{
        return `El numero ${res13} no es ni par ni impar`
    }

}
/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C")
 devolverá 32°F.*/
function temp(){
    res14 = require('./pedir_numero.js').numero("Escribe un numero: ","DEBES ESCRIBIR UN NUMERO!");
    cadena = require("./cadena_basic").cadena("Escriba la escala del numero(C o F): ");
    cadena = cadena.toLowerCase();
    if(cadena=="c"){
        return `${res14}C equivale a ${(res14*1.8) +32}F`
    }else if (cadena=="f"){
    return `${res14}F equivale a ${((res14-32 )*0.555) +32}C`
    }else {
        return `No has elegido una opcion valida!`
    }
}

 