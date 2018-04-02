//Home LOG IN
$(document).ready(() => {
  //login email y password
  let $btnSignIn = $('#signIn');
  let $emailInput = $('#email');
  let $passwordInput = $('#password');
  let $email;
  let $password;

  $emailInput.on('input', (event) => {
    $email = $emailInput.val();
    console.log($email);
    validateEmail($email, $emailInput);
  });

  $passwordInput.on('input', (event) => {
    $password = $passwordInput.val();
    console.log($password);
    validatePassword($password, $passwordInput);
    btnActive($btnSignIn);
  });

  $btnSignIn.on('click', (error) => {
    let $connect = firebase.auth().signInWithEmailAndPassword($email, $password);
    $connect.catch(error => alert(error.message));

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        alert('usted se ha loggeado satisfactoriamente');
        window.location = "collage.html";
      } else {
        alert('usted no se ha registrado');
      }
    });
  });

  //registro de usuario
  let $btnSignUp = $('#signUp');
  let $emailInputSignUp = $('#emailSignUp');
  let $passwordInputSignUp = $('#passwordSignUp');
  let $emailSignUp;
  let $passwordSignUp;

  $emailInputSignUp.on('input', (event) => {
    $emailSignUp = $emailInputSignUp.val();
    console.log($emailSignUp);
    validateEmail($emailSignUp, $emailInputSignUp);
  });

  $passwordInputSignUp.on('input', (event) => {
    $passwordSignUp = $passwordInputSignUp.val();
    console.log($passwordSignUp);
    validatePassword($passwordSignUp, $passwordInputSignUp);
    btnActive($btnSignUp);
  });

  $btnSignUp.on('click', (event) => {
    let $promise = firebase.auth().createUserWithEmailAndPassword($emailSignUp, $passwordSignUp);
    $promise.catch(event => alert(event.message));
    window.location = '../../collage.html';
  });


  //inicio con google
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
