let montako = prompt('Kuinka monta osallistujaa?');

let nimet = [];


for (let i = 0; i < montako; i++) {
    let nimi = prompt('Syötä osallistujan nimi: ');
    nimet.push(nimi);
}

nimet.sort(); 
let lista = "";

for (let i = 0; i < nimet.length; i++) {
    lista += `<li> ${nimet[i]} </li>`;
}
document.querySelector('ol').innerHTML = lista; 