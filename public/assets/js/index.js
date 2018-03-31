//Home LOG IN

  //login google
  $(document).ready(() => {
    //inicio con facebook
    let $loginGoogle = $('#signIn-google');
    $loginGoogle.on('click', googleLogin);

    function googleLogin() {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        // The signed-in user info.
        let user = result.user;
        // Mostramos su contenido
        console.log(user);
        window.location.assign('../../collage.html');
      });
    }
  })


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
