var button = document.getElementById('insta-btn');

button.addEventListener('click',function(event){
    var imageurl = document.getElementById('insta-input').nodeValue
    var img = document.createElement('img')

    img.src = imageurl

    document.body.appendChild(img)
})