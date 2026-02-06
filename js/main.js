let nombredelpersonaje = prompt("Ingrese el nombre de su personaje")

const actividades = {
        "dormir": 15,
        "comer": 10,
        "hidratarse": 5,
        "correr": -10,
        "entrenar": -15
}        
        
let energiainicial = 25

function energia(energiainicial, actividades){
        return energiainicial + actividades
}

