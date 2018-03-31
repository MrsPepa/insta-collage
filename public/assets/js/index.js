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


  //LOG IN FACEBOOK

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '753020794889244',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.12' // use graph api version 2.8
    });
  };
// Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.12&appId=753020794889244&autoLogAppEvents=1";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function validarUsuario() {
    FB.getLoginStatus(function(response) {
      if(response.status == 'connected') {
        FB.api('/me', function(response){
          alert('Hola ' + response.name);
        });
      } else if(response.status == 'not_authorized') {
        alert('Debes autorizar la app!');
      } else {
        alert('Debes ingresar a tu cuenta de Facebook!');
      }
    });
  }

  function ingresar() {
    FB.login(function(response){
      validarUsuario();
    }, {scope: 'public_profile, email'});
  }



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
