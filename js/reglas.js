class Actividades {
        static id = 0
        constructor(movimiento, energia) {
                this.id = ++Actividades.id,
                this.movimiento = movimiento,
                this.energia = energia
        }

}

const listaActividades = [
        actividad1,
        actividad2,
        actividad3,
        actividad4,
        actividad5
]

let actlist = document.getElementById("listadeactividades")

listaActividades.forEach(actividad => {
    console.log(`ID: ${actividad.id}, Movimiento: ${actividad.movimiento}, Energía: ${actividad.energia}`)
})