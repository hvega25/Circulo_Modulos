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

export { name, instanciar, reportArea, reportPerimeter };