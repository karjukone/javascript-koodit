
//tehtävä 1
console.log("I'm priting to concole!")
'use strict'
//tehtävä 2
const name = prompt('Type your name: ')
document.querySelector('#tehtävä2').innerHTML = 'Hello, ' + name + '!';
//tehtävä 3
let num1 = parseInt(prompt('Syötä ensimmäinen numero: '))
let num2 = parseInt(prompt('Syötä toinen numero: '))
let num3 = parseInt(prompt('Syötä kolmas numero: '))
summa = num1 + num2 + num3;
tulo = num1 * num2 * num3;
keskiarvo = summa / 3
document.querySelector('#summa').innerHTML = 'summa=' + summa;
document.querySelector('#tulo').innerHTML = 'tulo=' + tulo;
document.querySelector('#keskiarvo').innerHTML = 'keskiarvo=' + keskiarvo;

