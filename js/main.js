

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
let botFinalizar = document.getElementById("finalizar")
let energiaTotal = 0   


botoninicio.addEventListener("click", function() {
    contenedorb.classList.remove("oculto")
})

  

function sumarEnergia(){
        let botones = document.querySelectorAll(".boton")
        botones.forEach((button, index) => {
                button.onclick = () => {
                        const actividad = listaActividades[index]
                        energiaTotal += actividad.energia
                        document.getElementById("energia").textContent = `Energía: ${energiaTotal}`
                }
        })
        
        botFinalizar.onclick = () => {
                document.getElementById("contenedorb").classList.add("oculto")
                let resultado = document.getElementById("resultadoFinal")
                let mensaje = document.getElementById("mensajeFinal")
                mensaje.textContent = `Tu puntaje final es ${energiaTotal}`
                resultado.classList.remove("oculto")
        if (energiaTotal === 100){
                mensajeFinal.innerText = "¡Ganaste! Bien jugado."
        }else {
                mensajeFinal.innerText = `¡Casi! No lograste el equilibrio correcto. Tu energía final es ${energiaTotal} Volve a intentarlo!`      
        }
        }
}

document.addEventListener("DOMContentLoaded", sumarEnergia)


const nombre = document.getElementById("nombreusuario")
botFinalizar.addEventListener("click", () => {
        const agregarnombre = nombre.value || "Anonimo"
        const puntuacionNueva = {
                agregarnombre: agregarnombre,
                puntos: energiaTotal
        }
        let listaScore = JSON.parse(localStorage.getItem("ranking")) || []
        listaScore.push(puntuacionNueva)
        localStorage.setItem("ranking", JSON.stringify(listaScore))
})

document.addEventListener("DOMContentLoaded", sumarEnergia)
