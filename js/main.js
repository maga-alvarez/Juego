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



let menu = parseInt(prompt("Elije una opción \n 1.ver energía inicial \n 2. ver actividades \n 3. elegir actividad 4. salir "))

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
                
        default:
            alert ("opción incorrecta");
    }
    menu = parseInt(prompt("Elije una opción \n 1.ver energía inicial \n 2. ver actividades \n 3. salir "))
}




