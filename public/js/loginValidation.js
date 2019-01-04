window.onload = function(){

    var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var formLogin = document.getElementById("loginForm");
    var elements = formLogin.elements;
    elements = Array.from(elements);
    elements.pop();

    var inputEmail = document.querySelector('input[name="email"]');
    var inputPassword = document.querySelector('input[name="password"]');

    formLogin.addEventListener('submit', function (event) {

      if (
        inputEmail.value.trim() === "" || !regexEmail.test((inputEmail.value)) ||
        inputPassword.value.trim() === "" || inputPassword.value.length < 6 || inputPassword.value.length > 20
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
      else if ((this.value).length > 20) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'La contraseña es demasiado larga';
      }
      else {
        this.classList.remove("is-invalid");
        this.classList.add('is-valid');
      }
    });


}
