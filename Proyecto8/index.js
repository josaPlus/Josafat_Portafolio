let formulario = document.getElementById('formulario');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');


    let tareas = [];
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');


    function mostrarTareas(){
        listaTareas.innerHTML = '';
        tareas.forEach((tarea) => {
            listaTareas.innerHTML += `
            <div class='row'>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class='col-4 border p-3'>
                    <strong>${ tarea.descripcion }</strong>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-success'>Editar</button>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick='borrarTarea()'>Borrar</button>
                </div>
            </div>
            `;
        });
    }


    mostrarTareas();


    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = () =>{
        btnGuardar.setAttribute('data-bs-dismiss','modal');
        btnGuardar.click();
    }

    // let borrarFormulario = () =>{
    //     formulario.reset();

    //     // metodo para borra
    //     // nombre.value = '';
    //     // fecha.value = '';
    //     // descripcion.value = '';
    // }

    let borrarTarea = (indice) => {
        // splice es un metodo que borra elementos de un array
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();
    }

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
        // borrarFormulario();
    });

    

    borrarTarea();