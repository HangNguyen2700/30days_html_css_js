var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('span')

function updateProcess(percent){
    process.style.width = percent + '%'
    value.innerText = `${percent} %`
}

range.onmousemove = function(e) {
    var processWidth = e.clientX - this.offsetLeft
    var percent = Math.round(processWidth / this.offsetWidth * 100)
    updateProcess(percent)
}