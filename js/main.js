let nombredelpersonaje = prompt("Ingrese el nombre de su personaje")

function saludar(nombredelpersonaje){
alert("Bienvenido/a " + nombredelpersonaje + "!")
console.log("Bienvenido/a " + nombredelpersonaje + "!")
}
saludar(nombredelpersonaje)

const actividades = [comer, dormir, hidratarse, entrenar, correr, estirar]

let menu = parseInt(prompt("Elije 1.ver energía actual \n 2. ver actividades \n 3. salir "))

while (menu !== 3) {
    switch (menu) {
        case 1: 
            enregiaactual ()
        case 2:
            actividades()
        default:
            alert ("opción incorrecta")
    }
    menu = parseInt(prompt("Elije 1.ver energía actual, 2. ver actividades, 3. salir "))
}

