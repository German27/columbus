window.onload = function(){

    var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var formRegister = document.getElementById("registerForm");
    var elements = formRegister.elements;
    elements = Array.from(elements);
    elements.pop();
    elements.pop();
    elements.pop();

    formRegister.addEventListener('submit', function (event) {

      if (
        inputName.value.trim() === "" || inputName.value.length < 3 || inputName.value.length > 30 ||
        inputLastname.value.trim() === "" || inputLastname.value.length < 3 || inputLastname.value.length > 30 ||
        // inputUsername.value.trim() === "" || inputUsername.value.length < 3 || inputUsername.value.length > 30 ||
        // inputCountry.value === "0" ||
        inputEmail.value.trim() === "" || !regexEmail.test((inputEmail.value)) ||
        inputPassword.value.trim() === "" || inputPassword.value.length < 6 || inputPassword.value.length > 20 ||
        inputPasswordR.value.trim() === "" || inputPassword.value !== inputPasswordR.value
      ) {
        event.preventDefault();
        elements.forEach(function (element) {
          if (element.value == "") {
            element.classList.add("is-invalid");
            var div = element.parentElement.querySelector('.invalid-feedback');
            div.innerHTML = 'Campo obligatorio';
          }
        });
        // alert("Error en algun campo");
      }
    });

    var inputName = document.querySelector('input[name="name"]');
    var inputLastname = document.querySelector('input[name="lastname"]');
    // var inputUsername = document.querySelector('input[name="username"]');
    var inputCountry = document.getElementById('country');
    var inputEmail = document.querySelector('input[name="email"]');
    var inputPassword = document.querySelector('input[name="password"]');
    var inputPasswordR = document.querySelector('input[name="confirmPassword"]');

    //Name validation
    inputName.addEventListener('keyup',function(event){
      if ((this.value).length < 3) {
        this.classList.add('is-invalid');
        var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'El nombre es demasiado corto';
      }else if ((this.value).length >30) {
        this.classList.add('is-invalid');
        var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'El nombre es demasiado largo';
      }
      else {
        this.classList.remove("is-invalid");
        this.classList.add('is-valid');
      }
    });

    //Lastname validation
    inputLastname.addEventListener('keyup',function(event){
      if ((this.value).length < 3) {
        this.classList.add('is-invalid');
        var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'El apellido es demasiado corto';
      }
      else if ((this.value).length >30) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'El apellido es demasiado largo';
      }
      else {
        this.classList.remove("is-invalid");
        this.classList.add('is-valid');
      }
    });

    //Username validation
    // inputUsername.addEventListener('keyup',function(event){
    //   if ((this.value).length < 3) {
    //     this.classList.add('is-invalid');
    //   var div = this.parentElement.querySelector('.invalid-feedback');
    //     div.innerHTML = 'El nombre de usuario es demasiado corto';
    //   }
    //   else if ((this.value).length >30) {
    //     this.classList.add('is-invalid');
    //   var div = this.parentElement.querySelector('.invalid-feedback');
    //     div.innerHTML = 'El nombre de usuario es demasiado largo';
    //   }
    //   else {
    //     this.classList.remove("is-invalid");
    //     this.classList.add('is-valid');
    //   }
    // });


    //Email validation
    inputEmail.addEventListener('keyup',function(event){
      if (!regexEmail.test((this.value))) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'El formato de email es invalido';
      }
      else {
        this.classList.remove("is-invalid");
        this.classList.add('is-valid');
      }
    });

    //Password validation
    inputPassword.addEventListener('keyup',function(event){
      if ((this.value).length < 6) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'La contraseña es demasiado corta';
      }
      else if ((this.value).length >20) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'La contraseña es demasiado larga';
      }
      else {
        this.classList.remove("is-invalid");
        this.classList.add('is-valid');
      }
    });

    //Confirm password validation
    inputPasswordR.addEventListener('keyup',function(event){
      if (this.value !== inputPassword.value) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'Las contraseñas no coinciden';
      }
      else {
        this.classList.remove("is-invalid");
        this.classList.add('is-valid');
      }
    });


}
