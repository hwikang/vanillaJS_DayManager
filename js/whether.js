const whether = document.querySelector(".js-whether");
const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';
const COORDS ='coords';



function getWhether(lat,lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
).then(function(response){
    console.log(response)
  //  console.log(response.json())
    return response.json();

}).then(function(json){
    console.log(json);
    const temp = json.main.temp;
    const place = json.name;
    whether.innerHTML = `${temp} @ ${place}`
});
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude, 
        longitude
    }
    saveCoords(coordsObj);
    getWhether(latitude,longitude)
}
function handleGeoErro(){
    console.log("cant acces geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoErro);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWhether(parseCoords.latitude,parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();