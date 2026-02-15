

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

let botoninicio = document.getElementById("botoninicio")
let contenedorb = document.getElementById("contenedorb")
let oculto = document.getElementsByClassName("oculto")


botoninicio.addEventListener("click", function() {
    contenedorb.classList.remove("oculto")
})



