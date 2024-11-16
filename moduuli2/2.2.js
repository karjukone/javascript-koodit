let montako = prompt('Kuinka monta osallistujaa?');

let nimet = [];


for (let i = 0; i < montako; i++) {
    let nimi = prompt('Syötä osallistujan nimi: ');
    nimet.push(nimi);
}

nimet.sort(); 

for (let i = 0; i < nimet.length; i++) {
    document.querySelector('ol').innerHTML += `<li> ${nimet[i]} </li>`;
}