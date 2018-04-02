$(document).ready(() => {
  let validEmail = false;
  let validPassword = false;

  //expresion regular y validacion de correo
  isValidEmailAddress = (emailAdress) => {
    let emailReg = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    return emailReg.test(emailAdress);
  }

  //email validación
  validateEmail = (email, inputEmail) => {
    if(email !== 0 && isValidEmailAddress(email)) {
      inputEmail.addClass('success');
      inputEmail.removeClass('error');
      validEmail = true;
      console.log(validEmail);
    } else {
      inputEmail.addClass('error');
      inputEmail.removeClass('success');
      validEmail = false;
    }
  };
  //expresion regular y validacion de password
  isValidPassword = (password) => {
    let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    return passwordReg.test(password);
  }
  //password validacion
  validatePassword = (password, inputPassword) => {
    if(password !== isValidPassword(password)) {
      inputPassword.addClass('success');
      inputPassword.removeClass('error');
      validPassword = true;
      console.log(validPassword);
    } else {
      inputPassword.addClass('error');
      inputPassword.removeClass('success');
      validPassword = false;
    }
  };
  //activar boton
  btnActive = (btn) => {
    if(validateEmail === true && validatePassword === true) {
      btn.removeAttr('disabled');
      btn.removeClass('inactive');
      btn.addClass('active');
    } else {
      btn.attr('disabled', 'disabled');
      btn.addClass('inactive');
      btn.removeClass('active');
    }
  }
});