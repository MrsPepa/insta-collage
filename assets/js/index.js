//Home LOG IN
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAXN4jfXwIpZvJPd_imoGPrGkvYbj338qI",
  authDomain: "insta-collage-b5b47.firebaseapp.com",
  databaseURL: "https://insta-collage-b5b47.firebaseio.com",
  projectId: "insta-collage-b5b47",
  storageBucket: "insta-collage-b5b47.appspot.com",
  messagingSenderId: "1086065309668"
};
firebase.initializeApp(config);


//AUTENTICACION CON FACEBOOK
//creo el provider de autenticacion
var provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
  'display': 'popup'
});
//accedo al servicio de autenticacion
var authService = firebase.auth();
//evento para el boton de log in
document.getElementById('signIn-facebook').addEventListener('click', function(){
  //autentico con facebook
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});




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
