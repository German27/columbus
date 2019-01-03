let bodyTheme = localStorage.getItem('bodyTheme');
let navTheme = localStorage.getItem('navTheme');
let body = document.querySelector("body");
let nav = document.querySelector("nav");

//Si hay algo guardado en el localStorage de nav y body, se lo seteo
if (bodyTheme != null && navTheme != null) {
  body.className = bodyTheme;
  nav.className = navTheme;
}

//TEMA LIGHT 
let lightButton = document.getElementById("light");

lightButton.addEventListener("click", function () {

  let nav = document.querySelector("nav");
  let body = document.querySelector("body");
  let bodyThemeClass = 'light'
  let navThemeClass = 'navbar navbar-expand-lg navbar-dark bg-dark';

  localStorage.setItem("bodyTheme", bodyThemeClass);
  sessionStorage.setItem("bodyTheme", bodyThemeClass);

  localStorage.setItem("navTheme", navThemeClass);
  sessionStorage.setItem("navTheme", navThemeClass);

  body.className = bodyThemeClass;

  nav.className = navThemeClass;

});

//TEMA RELAX
let relaxButton = document.getElementById("relax");

relaxButton.addEventListener("click", function () {

  let body = document.querySelector("body");
  let nav = document.querySelector("nav");
  let bodyThemeClass = 'relax'
  let navThemeClass = 'navbar navbar-expand-lg navbar-relax bg-relax';

  localStorage.setItem("bodyTheme", bodyThemeClass);
  sessionStorage.setItem("bodyTheme", bodyThemeClass);

  localStorage.setItem("navTheme", navThemeClass);
  sessionStorage.setItem("navTheme", navThemeClass);

  body.className = bodyThemeClass;

  nav.className = navThemeClass;

});

//TEMA COOL
// let coolButton = document.getElementById("cool");

// coolButton.addEventListener("click", function () {

//   let body = document.querySelector("body");
//   let nav = document.querySelector("nav");
//   let temaBodyClase = 'cool'
//   let temaNavColor = 'navbar navbar-expand-lg navbar-german bg-german';

//   localStorage.setItem("temaBody", temaBodyClase);
//   sessionStorage.setItem("temaBody", temaBodyClase);

//   localStorage.setItem("temaNav", temaNavColor);
//   sessionStorage.setItem("temaNav", temaNavColor);

//   body.className = temaBodyClase;

//   nav.className = temaNavColor;

// });