let nombredelpersonaje = prompt("Ingrese el nombre de su personaje")

function saludar(nombredelpersonaje){
alert("Bienvenido/a " + nombredelpersonaje + "!")
console.log("Bienvenido/a " + nombredelpersonaje + "!")
}
saludar(nombredelpersonaje)

const actividades = ["dormir", "comer", "hidratarse", "entrar", "correr", "estirar"]
const energias = [15, 10, 5, -15, -10, -5]
let eneregia = 25 
function energiainicial (){
    console.log(" Tu energía inicial es " + eneregia)
}
function energiaactual(indiceActividad){
    energia = energia + energias[indiceActividad]
    console.log("Tu energía actual es: " + energia)
    if (energia < 0) {
        energia = " Te quedaste sin energía. Estas muerto."
    } else if (energia > 0) {
        eneregia = "Te pasaste de eneregía. Estas muerto."
    }
}
let actividadeliminada = actividades.pop




let menu = parseInt(prompt("Elije una opción \n 1.ver energía inicial \n 2. ver actividades \n 3. jugar \n 4. salir "))

while (menu !== 4) {
    switch (menu) {
        case 1: 
            energiainicial() 
                console.log(energiainicial);
                break
        case 2:
            for (let i = 0; i < actividades.length; i++){
                    console.log(actividades[i], energias[i]);
                }
                break
        case 3: 
            let juego = parseInt(prompt("Elije una actividad: \n 1. Dormir \n 2. Comer \n 3. Hidratarse \n 4. Entrenar \n 5. Correr \n 6. salir"))

                while (juego !== 6){
                    switch (energiaactual) {
                        case 1: 
                            dormir()
                            console.log("Sumaste 10 de energía!" + energiaactual)
                        case 2:
                            Comer()
                            console.log("Sumaste 15 de energía!" + energiaactual)
                        case 3:
                            hidratarse()
                            console.log("Sumaste 5 de energía!" + energiaactual)
                        case 4:
                            entrenar()
                            console.log("Restaste 15 de energía!" - energiaactual)
                        case 5:
                            correr()
                            console.log("Restaste 10 de energía!" + energiaactual)
                    }
                }
                break
        default:
            alert ("opción incorrecta");
    }
    menu = parseInt(prompt("Elije una opción \n 1.ver energía inicial \n 2. ver actividades \n 3. elegir actividad \n 4. salir "))
}





 
