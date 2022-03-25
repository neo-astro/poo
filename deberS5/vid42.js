/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.*/

class pelicula{
        constructor ({id,titulo,director,estreno,pais,generos,calificacion}){
            this.id = id;
            this.titulo = titulo;
            this.director = director;
            this.estreno = estreno;
            this.pais = pais;
            this.generos = generos;
            this.calificacion = calificacion;

            this.validarIMDB(id);
            this.ValidarTitulo(titulo);
            this.ValidarDirector(director);
            this.validarEstreno(estreno);
            this.validarPais(pais);
            this.validarGenero(generos);
            this.validarCalificacion(calificacion);
        }
        static get listaGeneros(){
            return  ["Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir","Game-show",
        "History","Horror",";Musical","Music","Mystery","News","Reality-TV","Romance","Sci-fi","Short","Sport","Talk-show","Thriller","War","Western"];
        }
        static generosAceptados(){
            return console.info(`Los generos aceptados son:${pelicula.listaGeneros.join(",")} `);
        }

        validarCadena(propiedad, valor){
            if(!valor)return console.warn(`${propiedad}"${valor}" esta vacio`);
            if(typeof valor !== "string") return console.error("No ingresaste una cadena de caracteres")
            return true;
        }
        validarLongitudCadena(propiedad, valor, longitud){
            if(valor.length>longitud)return console.error(`${propiedad}"${valor}" excede el numero de caracteres permitidos (${longitud}).`);
            return true;
        }
        validarNumero(propiedad, valor){
            if(!valor) return console.warn(`${propiedad}"${valor}" Está vacio`);
            if(typeof valor!== "number")return console.error(`${propiedad}"${valor}"ingresado, No es un numero`);
            return true;
        }
        validarArreglo(propiedad, valor){
            if(!valor) return console.warn(`${propiedad}"${valor}" Está vacio`);
            if(!(valor instanceof Array)) return console.error(`${propiedad}"${valor}"No es un arreglo`);
            if(valor.length===0) return console.error(`${propiedad}"${valor}" No ingreso datos`);
            for(let cadena of valor){
            if(typeof cadena!== "string")return console.error(`El valor "${cadena}"ingresado, No es una cadena de texto`);
            }
            return true;
        }


        validarIMDB(id){
            if(this.validarCadena("IMBD id", id))
                if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                    return console.error(`IMBD id"${id}" no es valido, debe tener 9 carcateres los dos primeros deben ser letras minusculas y los 7 restantes números`);
        }
        ValidarTitulo(titulo){
            if(this.validarCadena("Titulo", titulo))
            this.validarLongitudCadena("Titulo", titulo, 100);
                
        }
        ValidarDirector(director){
            if(this.validarCadena("Director", director))
            this.validarLongitudCadena("Director", director, 50);
                
        }
        validarEstreno(estreno){
            if(this.validarNumero("Año de estreno", estreno))
                if(!(/^([0-9]){4}$/.test(estreno)))
                    return console.error(`Año de estreno"${estreno}" no es valido, debe ser un numero con 4 digitos`);
        }
        validarPais(pais){
            this.validarArreglo("Pais", pais);
        }
        validarGenero(generos){
            if(this.validarArreglo("Generos", generos)){
                for(let genero of generos ){
                    //console.log(genero,pelicula.listaGeneros.includes(genero));
                    if(!pelicula.listaGeneros.includes(genero)){
                        console.error(`Genero(s) incorrectos"${generos.join(",")}"`);
                        pelicula.generosAceptados();
                    }

                }
            }
        }
        validarCalificacion(calificacion){
            if(this.validarNumero("Calificacion", calificacion))
                return  (calificacion<0||calificacion>10)
                ?console.error(`La calificacion tiene que estar entre el rango de 0 y 10`)
                :this.calificacion= calificacion.toFixed(1);
        }
        fichaTecnica(){
            console.info(`ficha Tecnica:\nTitulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPais:"${this.pais.join("-")}"\nGeneros:"${this.generos.join(",")}"\nCalificacion:"${this.calificacion}"\nIMBD id:"${this.id}"`)
        }
}
//pelicula.generosAceptados();
const peli= new pelicula({
    id: "tt1234567",
    titulo:" one day",
    director: "nombre director de la pelicula",
    estreno:  2015,
    pais:["Mexico"],
    generos: ["Comedy", "Sport"],
    calificacion: 7.5
});
peli.fichaTecnica();
const misPelis =[
    {
        id: "tt1234567",
        titulo: "One day",
        director: "Jenni Lawrence",
        estreno: 2019,
        pais:["USA"],
        generos:["Drama","Romance"],
        calificacion: 8.5

    },
    {
        id: "ta1237897",
        titulo: "Hunger Games",
        director: "Pill Lawrence",
        estreno: 2015,
        pais:["USA"],
        generos:["Drama","Romance","Fantasy","Action"],
        calificacion: 9
    },
    {
        id: "jt1234567",
        titulo: "La vida es Bella",
        director: "Roberto Benigni",
        estreno: 1997,
        pais:["Italia"],
        generos:["Drama","Romance"],
        calificacion: 10

    }

];
misPelis.forEach(el=>new pelicula(el).fichaTecnica());
