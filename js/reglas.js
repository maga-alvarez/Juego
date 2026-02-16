class Actividades {
        static id = 0
        constructor(movimiento, energia) {
                this.id = ++Actividades.id,
                this.movimiento = movimiento,
                this.energia = energia
        }

}

const actividad1 = new Actividades("Dormir", 15)
const actividad2 = new Actividades("Comer", 10)
const actividad3 = new Actividades("Hidratarse", 5)
const actividad4 = new Actividades("Entrenar", -15)
const actividad5 = new Actividades("Correr", -10)

const listaActividades = [
        actividad1,
        actividad2,
        actividad3,
        actividad4,
        actividad5
]

let actlist = document.getElementById("listadeactividades")

listaActividades.forEach(listaActividad =>{
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<span>ID: ${listaActividad.id}</span>
                    <h2 class="h2card">Actividad: ${listaActividad.movimiento}</h2>
                    <h3 class="h2card">Energia: ${listaActividad.energia}</h3>`
    actlist.appendChild(card)
} )