window.onload = function(){

    var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var inputEmail = document.querySelector('input[name="email"]');
    var inputPassword = document.querySelector('input[name="password"]');

    //VALIDACION DEL EMAIL
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

    //VALIDACION DEL PASSWORD
    inputPassword.addEventListener('keyup',function(event){
      if ((this.value).length < 4) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'La contrasena es demasiado corta';
      }
      else if ((this.value).length >30) {
        this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
        div.innerHTML = 'La contrasena es demasiado larga';
      }
      else {
        this.classList.remove("is-invalid");
        this.classList.add('is-valid');
      }
    });


}
