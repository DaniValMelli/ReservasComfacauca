async function searchCR() {
  try {
    const response = await fetch('http://localhost:3000/RecreationalCenters');
    
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json(); // Convierte la respuesta a JSON
    
    let centrorecretivo = "";
    data.forEach(element => {
      centrorecretivo += `
      <div class="card">
          <img src="../img/${element.imageUrl}" alt="Centro Recreativo ${element.name}">
          <h2>Centro Recreativo ${element.name}</h2>
          <p>Ubicación: ${element.location}</p>
          <button onclick="redirectToInfraestructura()">Ver infraestructuras</button>
      </div>
      `;
  });  
  const cardcontainer = document.getElementById("cardCR");
  cardcontainer.innerHTML = centrorecretivo;
  } catch (error) {
    console.error('Error:', error);
  }
}

searchCR();