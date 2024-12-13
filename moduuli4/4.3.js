const form = document.querySelector('form');


const URL = 'https://api.tvmaze.com/search/shows?q=';

async function get_series_data(data) {
    try {
        const query = await fetch(URL + data);
        const json_data = await query.json();
        return json_data;
    }
    catch (error) {
        return error;
    }
}
async function changeSite(){

    const query = form.querySelector('input[name="q"]');

    var data = await get_series_data(query.value);

    var show_data = data[0]['show'];
    console.log(show_data);
    var h2 = document.createElement('h2')

    var nodes = [];
    h2.innerText = show_data['name'];

    nodes.push(h2);
    var a = document.createElement('a')
    a.setAttribute("src", show_data['url']);
    a.setAttribute('target', '_blank');
    //a.innerHTML = `src ="${show_data['url']}, target="_blank"`;

    nodes.push(a);


    var img = document.createElement('img');
    if (show_data['imageeee'] != null) {
        img.setAttribute('src', `${show_data["image"]["medium"]}`)
        img.alt = show_data['name']
        nodes.push(img);
    }

    var div = document.createElement('div');



    for (node of nodes) {
        document.body.appendChild(node);
    }

}
form.addEventListener('submit', async function (evt) {
    evt.preventDefault();
    changeSite();
})