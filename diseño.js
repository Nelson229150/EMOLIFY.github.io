// Validación de formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const femaill = form.elements["femaill"].value;
  const fpasswd = form.elements["fpasswd"].value;

  if (!fname || !flastname || !femaill || !fpasswd) {
    event.preventDefault();
    alert("Por favor, complete todos los campos requeridos");
  } else if (!validateEmail(femaill)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else if (!validatename(fname)) {
    event.preventDefault();
    alert("Por favor, ingrese su nombre correctamente");
  } else if (!validatelastname(flastname)) {
    event.preventDefault();
    alert("Por favor, ingrese sus apellidos correctamente");
  } else if (!validatedist(fpasswd)) {
    event.preventDefault();
    alert("Por favor, ingrese una contraseña valida");
  } else {
    window.location.href = "indexcontac.html";
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
