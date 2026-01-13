// Recuperar citas guardadas al cargar la página
let citas = JSON.parse(localStorage.getItem('citas')) || [];

// Guardar cita cuando se envía el formulario
document.getElementById('citaForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  citas.push({nombre, fecha, hora});
  localStorage.setItem('citas', JSON.stringify(citas)); // guardar en localStorage

  alert('Cita enviada!');
  document.getElementById('citaForm').reset();
});

// Iniciar sesión del dueño
document.getElementById('loginBtn').addEventListener('click', function() {
  const p = document.getElementById('pass').value;
  if(p === 'manu123'){  // contraseña simple
    document.getElementById('citasAdmin').style.display = 'block';
    mostrarCitas();
  } else {
    alert('Contraseña incorrecta');
  }
});

// Mostrar citas al dueño
function mostrarCitas() {
  const lista = document.getElementById('listaCitas');
  lista.innerHTML = '';
  if(citas.length === 0){
    lista.innerHTML = '<li>No hay citas aún</li>';
  } else {
    citas.forEach(c => {
      lista.innerHTML += `<li>${c.nombre} - ${c.fecha} a las ${c.hora}</li>`;
    });
  }
}
