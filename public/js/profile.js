window.onload = function () {

  var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var formProfile = document.getElementById("registrationForm");
  var elements = formProfile.elements;
  elements = Array.from(elements);
  elements.pop();
  elements.pop();

  var editButton = document.getElementById("editButton");
  editButton.addEventListener('click', enableEdition);

  var discardButton = document.getElementById("discardButton");
  discardButton.addEventListener('click', discardEdition);

  function enableEdition() {
    elements.forEach(function (element) {
      element.removeAttribute("disabled");
    });

    inputEmail = document.querySelector('input[name="email"]');
    inputEmail.setAttribute("disabled", "disabled");

    inputFile = document.querySelector(".input-file-ale");
    inputFile.removeAttribute("disabled");

    editButton = document.getElementById("editButton");
    editButton.disabled = "disabled";

    discardButton = document.getElementById("discardButton");
    discardButton.removeAttribute("hidden");

    saveButton = document.getElementById("saveButton");
    saveButton.removeAttribute("hidden");
  }

  function discardEdition() {
    elements.forEach(function (element) {
      element.setAttribute("disabled", "disabled");
      element.classList.remove("is-invalid");
      element.classList.remove("is-valid");
    });

    inputFile = document.querySelector(".input-file-ale");
    inputFile.setAttribute("disabled", "disabled");
    inputFile.classList.remove("is-invalid");
    inputFile.classList.remove("is-valid");

    editButton = document.getElementById("editButton");
    editButton.removeAttribute("disabled");

    discardButton = document.getElementById("discardButton");
    discardButton.setAttribute("hidden", "hidden");

    saveButton = document.getElementById("saveButton");
    saveButton.setAttribute("hidden", "hidden");

  }

  formProfile.addEventListener('submit', function (event) {

    if (
      inputName.value.trim() === "" || inputName.value.length < 4 || inputName.value.length > 30 ||
      inputLastname.value.trim() === "" || inputLastname.value.length < 4 || inputLastname.value.length > 30 ||
      inputEmail.value.trim() === "" || !regexEmail.test((inputEmail.value))
    ) {
      event.preventDefault();
      elements.forEach(function (element) {
        if (element.value == "") {
          element.classList.add("is-invalid");
          var div = element.parentElement.querySelector('.invalid-feedback');
          console.log(div);
          div.innerHTML = 'Campo obligatorio';
        }
      });
      // alert("Error en algun campo");
    }
  });

  var inputName = document.querySelector('input[name="name"]');
  var inputLastname = document.querySelector('input[name="lastname"]');
  var inputPais = document.querySelector('input[name="country"]');

  //Name validation
  inputName.addEventListener('keyup', function (event) {
    if ((this.value).length < 4) {
      this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
      div.innerHTML = 'El nombre es demasiado corto';
    } else if ((this.value).length > 30) {
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
  inputLastname.addEventListener('keyup', function (event) {
    if ((this.value).length < 4) {
      this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
      div.innerHTML = 'El apellido es demasiado corto';
    }
    else if ((this.value).length > 30) {
      this.classList.add('is-invalid');
      var div = this.parentElement.querySelector('.invalid-feedback');
      div.innerHTML = 'El apellido es demasiado largo';
    }
    else {
      this.classList.remove("is-invalid");
      this.classList.add('is-valid');
    }
  });

  //Email validation
  // inputEmail.addEventListener('keyup', function (event) {
  //   if (!regexEmail.test((this.value))) {
  //     this.classList.add('is-invalid');
  //     var div = this.parentElement.querySelector('.invalid-feedback');
  //     div.innerHTML = 'El formato de email es invalido';
  //   }
  //   else {
  //     this.classList.remove("is-invalid");
  //     this.classList.add('is-valid');
  //   }
  // });

}