let nombredelpersonaje = prompt("Ingrese el nombre de su personaje")

function saludar(nombredelpersonaje){
alert("Bienvenido/a " + nombredelpersonaje + "!")
console.log("Bienvenido/a " + nombredelpersonaje + "!")
}
saludar(nombredelpersonaje)

const actividades = ["dormir", "comer", "hidratarse", "entrar", "correr", "estirar"]
const energias = [15, 10, 5, -15, -10, -5]
function energiainicial (){
    console.log(" Tu energía inicial es 25")
}

function eneregiactual(){
    let eneregia = energiainicial + actividad + energia;

}



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
        case 3: 
            juego()
                
        default:
            alert ("opción incorrecta");
    }
    menu = parseInt(prompt("Elije una opción \n 1.ver energía inicial \n 2. ver actividades \n 3. elegir actividad \n 4. salir "))
}

 let juego = parseInt(prompt("Elije una actividad: \n 1. Dormir \n 2. Comer \n 3. Hidratarse \n 4. Entrenar \n 5. Correr \n 6. salir"
))

 if (juego === 1) {
  console.log("Sumaste 10 de energia! Tu energía actual es: " + (energiainicial + 10));
} else if (juego === 2) {
  console.log("Sumaste 15 de energía! Tu energía actual es: " + (energiainicial + 15));
} else if (juego === 3) {
  console.log("Sumaste 5 de energía! Tu energía actual es: " + (energiainicial + 5));
} else if (juego === 4) {
  console.log("Restaste 15 de energía! Tu energía actual es: " + (energiainicial - 15));
} else if (juego === 5) {
  console.log("Restaste 10 de energía! Tu energía actual es: " + (energiainicial - 10));
}



