let montako = prompt('Kuinka monta osallistujaa?');

let nimet = []

for (let i = 0; i < montako; i++) {
    let nimi = prompt('Syötä osallistujan nimi: ');
    nimet.push(nimi);
}

let html = ""
for (let i=0; i < nimet.length; i++) {
    nimet.sort(i);
    html += "<li>" + nimet[i] + "</li>";
    document.querySelector('#nimet').innerHTML = html;
}