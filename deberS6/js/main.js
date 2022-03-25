$nombre = document.getElementById(`NOMBRE`)
$mensaje = document.getElementById(`MENSAJE`)
$email = document.getElementById(`EMAIL`)
$form = document.getElementById('FORM')

document.addEventListener('submit', (msm)=>{

    msm.preventDefault();
    
    /*Creando contenedor del modal */
    $container_model = document.createElement('div')
    $container_model.class = "containerModel"
    $container_model.classList.add('container_model')
    
    /*Creando boton al modal*/ 
    $boton = document.createElement('button')
    $boton.textContent= 'ACEPTAR'
    $boton.class = "boton_model"
    $boton.classList.add('boton_model')

    /*Un div en el que pondre el boton , foto , un div con informacion a mostrar */
    $model  = document.createElement('div')
    $model.classList.add('model')
    
    /*Creando imagen al modal */
    $imagenPerfil = document.createElement('img')
    $imagenPerfil.src = "../sources/perfil-picture.jpg"
    $imagenPerfil.classList.add('model_imagen')
    /* Un div que tenga el texto a mostrar en el modal*/
    $div_informacion = document.createElement('div')
    $div_informacion.innerHTML = `<br><h2 class="model_titulo">Informacion que sera enviada</h2><br><p>Al nombre de: ${$nombre.value}<br>Con el correo: ${$email.value}<br>El mensaje es:<br> ${$mensaje.value}<br></p>`
    
    /*Agg elementos */
    $model.appendChild($imagenPerfil)
    $model.appendChild($div_informacion)
    $model.appendChild($boton)
    $container_model.appendChild($model)
    window.document.body.appendChild($container_model)

    /*Escuchando al click del modal para eliminar el modal */
    $boton.addEventListener("click", function(e) {
    window.document.body.removeChild($container_model)
    $form.reset()
    })

})

/*Response menu */
$a = document.querySelectorAll("a") 
$checkbox = document.querySelector('.checkbox')

$a.item(0).addEventListener("click", function(e) {
    setTimeout(function() {
        $checkbox.checked = false
    }, 200)
})

$a.item(1).addEventListener("click", function(e) {
    setTimeout(function() {
        $checkbox.checked = false
    }, 200)
})

$a.item(2).addEventListener("click", function(e) {
    setTimeout(function() {
        $checkbox.checked = false
    }, 200)
})

$a.item(3).addEventListener("click", function(e) {
    setTimeout(function() {
        $checkbox.checked = false
    }, 200)
})

$a.item(4).addEventListener("click", function(e) {
    setTimeout(function() {
        $checkbox.checked = false
    }, 200)
})
