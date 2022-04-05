var inputImg = document.querySelector('#input-img')
var preview = document.querySelector('.preview')

inputImg.onchange = function(e) {
    var img = document.createElement('img')
    img.src = URL.createObjectURL(inputImg.files[0])

    preview.appendChild(img)
}