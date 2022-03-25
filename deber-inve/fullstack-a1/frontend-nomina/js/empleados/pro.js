// let personas = [{nombre:"adrian",edad:42},
// {nombre:"matos",edad:20},
// {nombre:"pedro",edad:14},
// {nombre:"mafer",edad:58}]

// let nombre = personas.filter(persona=> persona.nombre ) 
// console.log(nombre[0].nombre);


// async obtenerEmpleados() {


//     fetch(this.url)
//         .then((response) => response.json())
//         .then((empleados) => {
//             empleados.forEach((empleado) => {
//                 let {
//                     idempleado,
//                     idcargo,
//                     iddepartamento,
//                     sueldo,
//                     cedula,
//                     descripcion,
//                     estado
//                 } = empleado

//                 let lista_cargos = fetch(this.urlcargo)
//                     .then((response) => response.json())
//                     .then((cargos) => cargos)

//                 let lista_departamentos = fetch(this.urldepartamento)
//                     .then((response) => response.json())
//                     .then((departamentos) => departamentos)

//                 let filas = ""
//                 let cont = 0


//                 // let cargo =  lista_cargos.filter((cargo) => cargo)[cont].descripcion
//                 // let departamento =  lista_departamentos.filter((departamento) => departamento)[cont].descripcion
//                 cont += 1
//                 filas += `
//         <tr>
//         <td>${idempleado}</td>
//         <td>${descripcion}</td>
//         <td>${cedula}</td>
//         <td>${cargo}</td>
//         <td>${departamento}</td>
//         <td>${sueldo}</td>
//         <td>${estado ? "Activo" : "Inactivo"}</td>
//         <td>
//         <button type="button" class="btn btn-edit" id="btn-edit" data-id="${idempleado}">✏️</button>
//         <button type="button" class="btn btn-delete" id="btn-delete" data-id="${idempleado}">❌</button>
//         </td>
//         </tr>
//         `
//             })
//             document.getElementById("detalle-empleados").innerHTML = filas;

//         })

//     const btnsDelete = document.querySelectorAll(".btn-delete");
//     btnsDelete.forEach((btn) => {
//         btn.addEventListener("click", async (e) => {
//             console.log(btn.dataset.id, e.target.dataset.id);
//             console.log("elimnando...");
//             await this.eliminarEmpleado(e.target.dataset.id);
//         });
//     });


//     const $btnsEdit = document.querySelectorAll(".btn-edit");
//     $btnsEdit.forEach((btn) => {
//         btn.addEventListener("click", async (e) => {

//                 console.log('datos editar empleado', e.target.dataset.id);
//                 this.id = e.target.dataset.id;
//                 let {
//                     descripcion,
//                     estado,
//                     sueldo,
//                     cedula
//                 } = await this.obtenerEmpleado(this.id);
//                 document.getElementById("descripcion").value = descripcion;
//                 document.getElementById("activo").checked = estado;
//                 document.getElementById("enviar").innerHTML = "Actualizar";
//                 document.getElementById("cedula").value = cedula;
//                 document.getElementById("sueldo").value = sueldo;
//                 this.grabar = false;
//             })
//             .catch((err) => console.log(err))
//     })
}