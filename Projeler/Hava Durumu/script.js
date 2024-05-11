const url="https://api.openweathermap.org/data/2.5/"
const key="5a558f181607d34c9da1050f4594101c"

const setQuery =(e)=>{
    if(e.keyCode =="13"){
        getResult(search.value)
    }
}


const getResult = (cityName)=>{
    const query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)
}
 

const displayResult = (result)=>{
    console.log(result);
    let city = document.querySelector(".city")
    city.innerHTML = `${result.name}`
    let temp=document.querySelector(".temp")
    temp.innerHTML=`${Math.round(result.main.temp)}`
    let desc = document.querySelector(".desc")
    desc.innerHTML = `${result.weather[0].description}`
    let minmax=document.querySelector(".minmax")
    minmax.innerHTML=`${Math.round(result.main.temp_min)} °C / ${Math.round(result.main.temp_max)} °C`
}

const search = document.getElementById("search");
search.addEventListener("keypress",setQuery)