let nombredelpersonaje = prompt("Ingrese el nombre de su personaje")

function saludar(nombredelpersonaje){
alert("Bienvenido/a " + nombredelpersonaje + "!")
console.log("Bienvenido/a " + nombredelpersonaje + "!")
}
saludar(nombredelpersonaje)

const actividades = ["dormir", "comer", "hidratarse", "entrar", "correr", "estirar"]
const energias = [15, 10, 5, -15, -10, -5]
let energia = 25 
function energiainicial (){
    console.log(" Tu energía inicial es " + energia)
}
function energiaactual(indiceActividad){
    energia = energia + energias[indiceActividad]
    console.log("Tu energía actual es: " + energia)
}
let actividadeliminada = actividades.pop

function energiafinal(energiaactual){
    if (energia < 0) {
        energia = 0
        alert(" Te quedaste sin energía. Estas muerto.")
    } else if (energia > 100) {
        enregia = 111
        alert(" Te pasaste de energía. Estas muerto.")
    } else if (energia === 100) {
        energia = 100
        alert("Ganaste!!! Llegaste al 100% de energía. ¡Bien juagado!")
    } else if (energia > 0 && energia < 100){
        energia = energiafinal 
        alert("No llegaste a la energía óptima, perdiste :(")
    }
}




let menu = parseInt(prompt("Elije una opción \n 1.ver energía inicial \n 2. ver actividades \n 3. jugar \n 4. salir "))

while (menu !== 4) {
    switch (menu) {
        case 1: 
            energiainicial() 
            break
        case 2:
            for (let i = 0; i < actividades.length; i++){
                    console.log(actividades[i], energias[i]);
                }
                break
        case 3: 
            let juego = parseInt(prompt("Elije una actividad: \n 1. Dormir \n 2. Comer \n 3. Hidratarse \n 4. Entrenar \n 5. Correr \n 6. puntaje final \n 7. ver energía final \n 8. salir"))
            while (juego !== 7){
                switch (juego) {
                    case 1: 
                        energiaactual (0)
                        break
                    case 2:
                        energiaactual (1)
                        break
                    case 3:
                        energiaactual (2)
                        break
                    case 4:
                        energiaactual (3)
                        break
                    case 5:
                        energiaactual (4)
                        break
                    case 6: 
                        energiafinal()
                        break
                    default : 
                        alert("Elije una actividad: \n 1. Dormir \n 2. Comer \n 3. Hidratarse \n 4. Entrenar \n 5. Correr \n 6. puntaje final \n 7. salir")
                }
        }
    }
    menu = parseInt(prompt("Elije una opción \n 1.ver energía inicial \n 2. ver actividades \n 3. elegir actividad \n 4. salir "))
}
