//Iniciando collage y acceso de imagenes
function drag(event) {
  console.log(event.target.src);
  event.dataTransfer.setData('text', event.target.id);//tipo de formato a transferir
}

function admitirDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var id_foto = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(id_foto));
}
//Home LOG IN
