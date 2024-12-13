const button = document.querySelector('button');

function popup(evt) {
    alert('Button was clicked!!!!');
}

button.addEventListener('click', popup);