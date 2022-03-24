var btnSearch = document.querySelector('.search-box__btn')


btnSearch.onclick = function () {
   this.parentElement.classList.toggle('open')
   this.previousElementSibling.focus()
}

