const form = document.querySelector('form');

const URL = 'https://api.tvmaze.com/search/shows?q=';

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const query = form.querySelector('#query');

    try {
        const response = await fetch(URL +  `${query.value}`);
        const json_data = await response.json()
        console.log(json_data)
    } catch (error) {
        console.log(error);
    }
})