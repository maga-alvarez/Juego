let nombredelpersonaje = prompt("Ingrese el nombre de su personaje")

const actividades = ["dormir", "comer", "hidratarse", "entrar", "correr", "estirar"]
const energias = [15, 10, 5, -15, -10, -5]

function energiaactual(indiceActividad){
    energia = energia + energias[indiceActividad]
    console.log("Tu energía actual es: " + energia)
}


