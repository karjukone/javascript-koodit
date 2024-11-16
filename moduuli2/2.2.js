let montako = prompt('Kuinka monta osallistujaa?');

let nimet = []

for (let i = 0; i < montako; i++) {
    let nimi = prompt('Syötä osallistujan nimi: ');
    nimet.push(nimi);
}

for (let i=0; i < nimet.length; i++) {
    nimet.sort(i);;
    document.querySelector('#nimet').innerHTML = `<li> ${i} </li>`;
}