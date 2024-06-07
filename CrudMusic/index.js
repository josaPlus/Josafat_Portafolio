let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");
let idTarea = document.getElementById("idTarea");

// obtener los valores de los inputs
let imagen = document.getElementById("imagen");
let video = document.getElementById("video");
let audio = document.getElementById("audio");
let nombreCancion = document.getElementById("nombreCancion");
let artista = document.getElementById("artista");

let tareas = [
  {
    imagen: "https://i.scdn.co/image/ab67616d0000b273383811a9b3081023c612fb7b",
    video: "Musica1.mp4",
    audio: "Audio1.mp3",
    nombreCancion: "I dont want to set the world on fire",
    artista: "The ink spots",
  },
  {
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsNKecFRIsj0pNlAy2fFYtruNJRbNQD9UXphz0hLJcg&s",
    video: "Musica2.mp4",
    audio: "Audio2.mp3",
    nombreCancion: "Happy nation",
    artista: " Ace of Base",
  }
];

let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById("btnGuardar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");

function mostrarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
      listaTareas.innerHTML += `
              <div class='row'>
      <div class='col-lg-3 col-md-4 col-sm-6 border p-3'>
          <img src="${tarea.imagen}" alt="Imagen de la tarea" class="img-fluid">
      </div>
      <div class='col-lg-3 col-md-4 col-sm-6 border p-3'>
      <video src="${tarea.video}" controls class="img-fluid"></video>
  </div>
      <div class='col-lg-3 col-md-4 col-sm-6 border p-3'>
          <audio controls>
              <source src="${tarea.audio}" type="audio/mpeg">
              Tu navegador no soporta el elemento de audio.
          </audio>
      </div>
      <div class='col-lg-3 col-md-4 col-sm-6 border p-3'>
          <strong>${tarea.nombreCancion}</strong>
      </div>
      <div class='col-lg-3 col-md-4 col-sm-6 border p-3'>
          <strong>${tarea.artista}</strong>
      </div>
    <div class='col-lg-3 col-md-4 col-sm-6 border p-3 text-center'>
        <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${indice})">Editar</button>
    </div>
    <div class='col-lg-3 col-md-4 col-sm-6 border p-3 text-center'>
        <button class='btn btn-danger' onClick="borrarTarea(${indice})">Borrar</button>
    </div>
</div>
            `;
  });
}

mostrarTareas();

let editarTarea = (indice) => {
  imagenEditar.value = tareas[indice].imagen;
  videoEditar.value = tareas[indice].video;
  audioEditar.value = tareas[indice].audio;
  nombreCancionEditar.value = tareas[indice].nombreCancion;
  artistaEditar.value = tareas[indice].artista;
  idTarea.value = indice;
};

formularioEditar.addEventListener("submit", (e) => {
  e.preventDefault();
  let indice = idTarea.value;
  tareas[indice].imagen = imagenEditar.value;
  tareas[indice].video = videoEditar.value;
  tareas[indice].audio = audioEditar.value;
  tareas[indice].nombreCancion = nombreCancionEditar.value;
  tareas[indice].artista = artistaEditar.value;
  mostrarTareas();
  cerrarModalEditar();
});

let agregarDatos = () => {
  let datos = {
    imagen: imagen.value,
    video: video.value,
    audio: audio.value,
    nombreCancion: nombreCancion.value,
    artista: artista.value,
  };
  tareas.push(datos);
  mostrarTareas();
};

let cerrarModal = () => {
  btnGuardar.setAttribute("data-bs-dismiss", "modal");
  btnGuardar.click();
};

let cerrarModalEditar = () => {
  btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
  btnGuardarEditar.click();
};

let borrarTarea = (indice) => {
  tareas.splice(indice, 1);
  console.log(tareas);
  mostrarTareas();
};

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  agregarDatos();
  cerrarModal();
  formulario.reset();
});
