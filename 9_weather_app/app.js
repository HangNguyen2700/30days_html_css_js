var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body')

async function changeWeatherUI() {
    var capitalSearch = search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=f8f5903e16360aa1914db2d2b944c600`

    let data = await fetch(apiURL).then(response => response.json())
    //vi fetch tra ce promise -> nen them await
    console.log(data)

    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = (data.main.temp - 273.15).toFixed(2)
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString(data.sys.country)
    
        
        if(temp<10){
            body.setAttribute('class', 'cold')
        }
        else if(temp<20){
            body.setAttribute('class', 'cool')
        }
        else if(temp<29){
            body.setAttribute('class', 'warm')
        }
        else {
            body.setAttribute('class', 'hot')
        }


    } else {
        content.classList.add('hide')
    }

}


search.onkeypress = function(e) {
    if(e.code === 'Enter') {
        changeWeatherUI()
    }
}