let formulario = document.getElementById('formulario');
    let formularioEditar = document.getElementById('formularioEditar');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');
    let idTarea = document.getElementById('idTarea');
 
    let tareas = [
    {   
        nombre : "Josafat" ,
        fecha : "2023-12-31",
        descripcion : "Hola mundo"
    },
    {   
        nombre : "Abraham" ,
        fecha : "2024-10-21",
        descripcion : "Hola mundo1"
    } ,
    {
        nombre : "Fer" ,
        fecha : "2025-12-27",
        descripcion : "Hola mundo2"
    }];
 
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');
    let btnGuardarEditar = document.getElementById('btnGuardarEditar');
 
    function mostrarTareas(){
        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
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
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${ indice })">Editar</button>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${ indice })">Borrar</button>
                </div>
            </div>
            `;
        });
    }
 
    mostrarTareas();
 
    let editarTarea = (indice) => {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;
        mostrarTareas();
        cerrarModalEditar();
    });
 
    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = ()=> {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
        btnGuardar.click();
    }
 
    let cerrarModalEditar = ()=> {
        btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
        btnGuardarEditar.click();
    }
 
    let borrarTarea = (indice)=> {
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();
    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });