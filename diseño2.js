// Validación de formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fuser = form.elements["fuser"].value;
  const fpasswdd = form.elements["fpasswdd"].value;

  if (!fuser || !fpasswdd) {
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

function validatename(fuser) {
  const re = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
  return re.test(fuser.trim());
}
function validatedist(fpasswd) {
  const re = /^[a-zA-Z0-9._%+-]{6,}$/;
  return re.test(String(fpasswd).toLowerCase());
}
