class Persona{
    constructor(name,cedula,fecha,estado){
        this.name = name;
        this._cedula=cedula;
        this.fecha = fecha;
        this.fecha.estado
    }
    mostrar(msg="datos de la persona"){
        console.log(msg + `\n`+`Nombre: ${this.name} Cedula: ${this._cedula} Fecha nacimineto: ${this.fecha}`);
    }
    set cedula(x){
        this.cedula = x
    }
    get cedula(){}
}

const fecha = new Date(2001,1,20);
const obje1 = new Persona("adrian",094545454,(fecha.toLocaleDateString()))
const obje2 = new Persona("matias",087455,(new Date(2001,1,20).toLocaleDateString()))
obje1.mostrar()
obje2.mostrar()

//destruturar map  {name:nombre(la clave dale el nombre de nombre)}