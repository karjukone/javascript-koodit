const name = prompt('Enter your name: ')
let numero = Math.floor(Math.random() * 4);
if (numero == 0) {
    document.querySelector('#tulos').innerHTML = 'Hey ' + name + ' you are a ravenclaw';
}
else if(numero == 1) {
    document.querySelector('#tulos').innerHTML = 'Hey ' + name + ' you are a huffelpuff';
}
else if(numero == 2) {
    document.querySelector('#tulos').innerHTML = 'Hey ' + name + ' you are a slytherin';
}
else if(numero == 3) {
    document.querySelector('#tulos').innerHTML = 'Hey ' + name + ' you are a gryffindor';
}
