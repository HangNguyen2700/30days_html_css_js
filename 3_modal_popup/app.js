var openBtn = document.querySelector(".open-modal-btn")
var modal = document.querySelector(".modal")
var closeIcon = document.querySelector(".modal__header i")
var closeBtn = document.querySelector(".modal__footer button")

function modalToggle(){
    modal.classList.toggle('hide')
}

openBtn.addEventListener('click', modalToggle)

closeIcon.addEventListener('click', modalToggle)
closeBtn.addEventListener('click', modalToggle)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        modalToggle()
    }
})

