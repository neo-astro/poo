/*15) Programa una función para convertir números de base binaria a decimal 
y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el numero a convertir");
    
    
    if (typeof numero !== "number") return console.error( `El valor" ${numero} " ingresado, NO es un numero`)
    
    if (base === undefined) return console.warn("No ingresaste la base a convertir")
    
    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un numero`)
    
    if (base === 2){
        return console.info(`${numero} base ${base} = ${parselnt(numero, base)} base 10`)
    }else if (base === 10) {
        return console.nfo(`${numero} base ${base} = ${numero} base 2)`)
    }
}

/*16) Programa una función que devuelva el monto final después de aplicar un 
descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

function descuento(){
    n =  require('./pedir_numero.js').numero("Escribe un cantidad: ","DEBES ESCRIBIR UN NUMERO!");
    des =  require('./pedir_numero.js').numero("El % para el descuento : ","DEBES ESCRIBIR UN NUMERO!");
    if (n < 0 || des <0){
        console.log("Debes escribir un valor positivo!");
        return new descuento();
        
    }else if (des > 100){
        console.log("No puedes aplicar descuento mayor al 100%");
        return new descuento();
    }else {
        return `El precio final de ${n}$ aplicando el ${des}% es de : ${n - ((n*des)/100)}$`;
    }
}


/*17) Programa una función que dada una fecha válida determine cuantos años
 han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
function fecha(){
    año =  require('./pedir_numero.js').numero("Escribe el año: ","DEBES ESCRIBIR UN NUMERO!")
    mes = require('./pedir_numero.js').numero("Escribe mes: ","DEBES ESCRIBIR UN NUMERO!")
    dia =  require('./pedir_numero.js').numero("Escribe el dia: ","DEBES ESCRIBIR UN NUMERO!")
    mes -= mes

    if(mes,dia,año < 0){
        console.log("No puedes escribir datos negativos");
        return fecha()
    }else{

    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();

    age = today_year - año;

    if ( today_month < (mes - 1))
    {
        age--;
    }
    if (((mes - 1) == today_month) && (today_day < dia))
    {
        age--;
    }
    return age;
}
}

