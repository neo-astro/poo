exports.numero = function numero(msg,error) {
    data = require("./cadena_basic").cadena(msg,error);
    if(!data.includes(" ") && (data == parseInt(data))){
        return data
    }else {
        console.log("Recuerda escribir un numero sin dejar espacios!")
        return require('./pedir_numero.js').numero(msg,error)
    }
}