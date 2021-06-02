let btnOpen = document.querySelector('button');
let input = document.querySelector('input');

btnOpen.addEventListener('click', () => {
    window.open('https://nhentai.to/g/' + input.value, '_black');
});