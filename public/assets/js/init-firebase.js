$(document).ready(() => {
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyAXN4jfXwIpZvJPd_imoGPrGkvYbj338qI",
    authDomain: "insta-collage-b5b47.firebaseapp.com",
    databaseURL: "https://insta-collage-b5b47.firebaseio.com",
    projectId: "insta-collage-b5b47",
    storageBucket: "insta-collage-b5b47.appspot.com",
    messagingSenderId: "1086065309668"
  };
  firebase.initializeApp(config);
});
/*
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

  var loginFacebook = document.getElementById('signIn-facebook');
  loginFacebook.addEventListener('click', ingresoFacebook, false);

  function ingresoFacebook() {
    if(!firebase.auth().currentUser) {
      var provider = new firebase.auth.FacebookAuthProvider();

      provider.addScope('public_profile');

      firebase.auth().signInWithPopup(provider).then(function(result){
      //obtener valor de credencial
      var token = result.credential.accessToken;
      //obtener informacion de usuario
      var user = result.user;
      console.log(user);

      //si no se puede conectar, tengo que capturar el error que produce
    }).catch(function(error){
        //error de codigo
        var errorCode = error.code;
        //error de mensaje
        var errorMessage = error.message;
        //error de email
        var email = error.email;
        //error de credenciales
        var credential = error.credential;
        //error ocurrido
        if(errorCode === 'auth/account-exists-with-different-credential'){//ya existe la cuenta
          alert('es el mismo usuario');
        }
      });
    } else {
      firebase.auth().signOut();
    }
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser)
        {
            console.log(firebaseUser);
            window.location = "collage.html";
        }
        else
        {
            console.log("not logged in");
        }
    });
  }
<div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" scope="public_profile, email" onlogin="checkLoginState()"></div>
  */
