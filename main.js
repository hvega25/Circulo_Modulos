import { name, instanciar, reportArea, reportPerimeter, draw, random_circle } from './circle.js'

let longitudArco = 70;

for (let i = 0; i < 7; i++) {
    draw(i, longitudArco);
    longitudArco = longitudArco + 5;
}



for(let i =0; i <10; i++){
    random_circle();
}

