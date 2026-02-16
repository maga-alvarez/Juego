const tabla = document.getElementById ("tablaPuntajes")

const listaScore = JSON.parse(localStorage.getItem("ranking")) || []


listaScore.forEach((puntuacion) => {
    const fila = document.createElement("tr")
    fila.innerHTML = `<td>${puntuacion.agregarnombre}</td>
                    <td>${puntuacion.puntos}%</td>`
    tabla.appendChild(fila)
    
});