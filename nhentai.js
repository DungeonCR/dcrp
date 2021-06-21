
let btnOpen = document.querySelector('button');
let input = document.querySelector('input');

btnOpen.addEventListener('click', () => {
    window.open('https://nhentai.net/g/' + input.value, '_black');
});

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
    window.open('https://nhentai.net/g/' + input.value, '_black');
}