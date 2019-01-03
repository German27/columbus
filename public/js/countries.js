//PAISES API 
var inputState = document.getElementById('country');
var inputProvinces = document.getElementById('province');
var provinceSelect = document.getElementById('provinceSelect');

fetch('https://restcountries.eu/rest/v2/all')
  .then(function (response) {
    return response.json();
  })

  .then(function (paises) {
    paises.forEach(function (pais) {
      inputState.innerHTML += '<option>' + pais.name + '</option>';
    });
  })

  .catch(function (error) {
    console.log(error);
  });

// inputState.addEventListener('change', function () {
//   if (this.value === 'Argentina') {
//     provinceSelect.style.display = 'block';
//     fetch('https://dev.digitalhouse.com/api/getProvincias')
//       .then(function (response) {
//         return response.json();
//       })

//       .then(function (provinces) {
//         provinceSelect.innerHTML = '';
//         provinces.forEach(function (prov) {
//           provinceSelect.innerHTML += '<option>' + prov.state + '</option>';
//         });
//       })

//       .catch(function (error) {
//         console.log(error);
//       });

//   } else {
//     provinceSelect.style.display = 'none';
//     inputProvinces.innerHTML = '';
//   }
// });