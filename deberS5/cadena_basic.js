const ps = require('prompt-sync');
const input = ps()
const print = msg => console.log(msg)


exports.cadena = function cadena(msg,error) {
data = input(msg)
data = data.replace(/\s+/g," ")
data_trans = data.trim()
if(data_trans.length > 0){
  return data_trans
}else{
  print(error)
  return require("./cadena_basic").cadena(msg,error)

}}
 