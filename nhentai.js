
let btnOpen = document.querySelector('button');
let input = document.querySelector('input');

btnOpen.addEventListener('click', () => {
    window.open('https://nhentai.net/g/' + input.value, '_black');
});
