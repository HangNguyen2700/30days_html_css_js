var images = document.querySelectorAll('.image img') //return 1 array
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__content img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0

function showGallery() {
    if(currentIndex == 0){
        prev.classList.add('hide')
    } else{
        prev.classList.remove('hide')
    }

    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    } else{
        next.classList.remove('hide')
    }

    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.onclick = () => {
        currentIndex = index
        showGallery()
    }
})

close.onclick = () => {
    gallery.classList.remove('show')
}

document.onkeydown = (e) => {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
}

prev.onclick = () => {
    if(currentIndex>0){
        currentIndex--
    }
    showGallery()
}

prev.onclick = () => {
    if(currentIndex>0){
        currentIndex--
    }
    showGallery()
}

next.onclick = () => {
    if(currentIndex < images.length -1 ){
        currentIndex++
    }
    showGallery()
}