let nombredelpersonaje = prompt("Ingrese el nombre de su personaje")

function saludar(nombredelpersonaje){
alert("Bienvenido/a " + nombredelpersonaje + "!")
console.log("Bienvenido/a " + nombredelpersonaje + "!")
}
saludar(nombredelpersonaje)

const actividades = ["dormir", "comer", "hidratarse", "entrar", "correr", "estirar"]
const energias = [15, 10, 5, -15, -10, -5]
const energiainicial = 25

let menu = parseInt(prompt("Elije una opción \n 1.ver energía actual \n 2. ver actividades \n 3. salir "))

while (menu !== 3) {
    switch (menu) {
        case 1: 
            enregiaactual ()
        case 2:
            for (let i = 0; i < actividades.length; i++){
                    console.log(actividades[i], energias[i])
                }
        default:
            alert ("opción incorrecta")
    }
    menu = parseInt(prompt("Elije 1.ver energía actual, 2. ver actividades, 3. salir "))
}

//Recorrer actividades

for (let i = 0; i < actividades.length; i++){
    console.log(actividades[i], energias[i])

}



