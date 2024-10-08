// Función para redirigir a la página de infraestructuras del centro recreativo seleccionado
function redirectToInfraestructura() {
  window.location.href = "../pages/infraestructura.html";
}

function reservarInfraestructura(infraestructura) {
  alert(`Reservando: ${infraestructura}`);
  // Redireccionar a la página de reservas
  window.location.href = "../pages/reservas-trabajador.html";
}
function GestionDeReservas() {
  // Redireccionar a la página de reservas
  window.location.href = "../pages/reservas-trabajador.html";
}

// Filtrar las reservas basadas en el tipo de usuario y el estado de la reserva
function filtrarReservas() {
  const tipoUsuario = document.getElementById('tipoUsuario').value;
  const estadoReserva = document.getElementById('estadoReserva').value;

  // Implementar lógica para filtrar la lista de reservas
  alert(`Filtrando por Tipo de Usuario: ${tipoUsuario}, Estado: ${estadoReserva}`);
}

// Editar una reserva (ejemplo básico)
function editarReserva() {
  alert("Editando reserva...");
  // Lógica para redirigir a la interfaz de edición
}

// Cancelar una reserva
function cancelarReserva() {
  alert("Cancelando reserva...");
  // Lógica para cancelar la reserva
}

// Crear una nueva reserva
function crearNuevaReserva() {
  alert("Creando nueva reserva...");
  // Redirigir a una página para crear una nueva reserva
  window.location.href = "../pages/crear-reserva.html";
}
