import { name, instanciar, reportArea, reportPerimeter } from './circle.js'


let longitudArco = 70;

function arco(posicion, reduccion) {
    const colores = ["purple", "indigo", "blue", "green", "yellow", "orange", "red"];
    var ctx = document.getElementById("Arco1").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = colores[posicion];
    ctx.arc(250, 150, reduccion, Math.PI, 0);
    ctx.lineWidth = 4;
    ctx.stroke();
}

for (let i = 0; i < 7; i++) {
    arco(i, longitudArco);
    longitudArco = longitudArco + 5;
}


function Circulo() {
    let x = (Math.random() * 100) + 50;
    let y = (Math.random() * 100) + 75;
    let radio = (Math.random() * 20) + 10;

    var c = document.getElementById("Circulo");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.strokeStyle = "#006400"
    ctx.fillStyle = "#6ab150";
    ctx.fill();
    ctx.stroke();
}

for(let i =0; i <10; i++){
    Circulo();
}

