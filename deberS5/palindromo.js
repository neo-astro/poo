exports.palindromo =function palindromo(){
  res = new require("./cadena_basic").cadena("Escribe un numero: ","Debes escribir un numero").toLowerCase()
  data = res.replace(" ","")
  reverso = (data.split("").reverse()).join("")
  is_palindromo = data == reverso
  list = [is_palindromo,res, reverso]
  return list
}