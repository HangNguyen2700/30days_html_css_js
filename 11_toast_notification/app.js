var btnSuccess = document.querySelector('.success');
var btnWarning = document.querySelector('.warning');
var btnError = document.querySelector('.error');

btnSuccess.onclick = function () {
    createToast('success')
}

btnWarning.onclick = function () {
    createToast('warning')
}

btnError.onclick = function () {
    createToast('error')
}

function createToast(status){
    let templateInner = ``
    switch(status){
            case 'success':
                templateInner=`<i class="fa-solid fa-circle-check"></i>
                <span class="message">This is a success message!</span>`
                break
            case 'warning':
                templateInner=`<i class="fa-solid fa-circle-exclamation"></i>
                <span class="message">This is a warning message!</span>`
                break
            case 'error':
                templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
                <span class="message">This is an error message!</span>`
                break
    }

    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = ` ${templateInner} 
                        <span class="countdown"></span>`

    var toasts = document.getElementById('toasts')
    toasts.appendChild(toast)

    setTimeout(function(){
        toast.style.animation = 'slide_hide 3s ease forwards'
    },3000)

    setTimeout(function(){
        toast.remove()
    }, 7000)
}