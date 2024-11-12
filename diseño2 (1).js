// Validación de formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fuser = form.elements["fuser"].value;
  const fpasswdd = form.elements["fpasswdd"].value;

  if (!fuser || !fpasswdd || !femaill || !fpasswd) {
    event.preventDefault();
    alert("Por favor, complete todos los campos requeridos");
  } else if (!validateEmail(fuser)) {
    event.preventDefault();
    alert("Por favor, ingrese el usuario correcto");
  } else if (!validatename(fpasswdd)) {
    event.preventDefault();
    alert("Por favor, ingrese la contraseña correcta");
  }
});

function validateEmail(femaill) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(femaill).toLowerCase());
}
function validatename(fname) {
  const re = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
  return re.test(fname.trim());
}
function validatelastname(flastname) {
  const re = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
  return re.test(flastname.trim());
}
function validatedist(fpasswd) {
  const re = /^[a-zA-Z0-9._%+-]{6,}$/;
  return re.test(String(fpasswd).toLowerCase());
}
