var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')
var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')

document.onkeydown = function(e){
    alert.classList.add('hide')

    result.innerText = e.key
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    box.classList.remove('hide')


}