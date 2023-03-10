const name = 'circle';

function instanciar(radio, color) {
  return {
    radio: radio,
    color: color
  };
}

function reportArea(radio) {
  console.log(Math.PI * Math.pow(radio,2) );
}

function reportPerimeter(radio) {
    console.log( 2 * Math.PI * Math.pow(radio,2));
}




function draw(posicion, reduccion) {
    const colores = ["purple", "indigo", "blue", "green", "yellow", "orange", "red"];
    var ctx = document.getElementById("Arco1").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = colores[posicion];
    ctx.arc(250, 150, reduccion, Math.PI, 0);
    ctx.lineWidth = 4;
    ctx.stroke();
}
function random_circle() {
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


export { name, instanciar, reportArea, reportPerimeter, draw, random_circle };