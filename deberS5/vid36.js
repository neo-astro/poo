/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
function aleatorio(){
    dato = Math.floor(Math.random() *(502-501)+501)
    return `Este es un numero random: ${dato}`
}

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
function palindromo2(){
    res10 = new require('./palindromo.js').palindromo()
    if(res10[1] == parseInt(res10[1])){
        return res10//list[t/f,data,reverse data]      
    }else {
        console.log(`Debes escribir numeros`)
        new palindromo2()
    }
}
/* 11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de 
    todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/


function factorial() {
        let res11 =  palindromo2("Escribe un numero: ", "Deber escribir un numero")[1]
        if(res11>0){
            let data = 0
            for(i=1;i < res11 ;i+=1){
            data = data*(i+1)
        }
        }else {
            console.log(`Debes escribir un numero mayor a 0`);
            return factorial()
        }
        return data
}

console.log(factorial());