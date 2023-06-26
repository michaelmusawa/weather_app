async function getLocation (location) {
    try {
        const response = await fetch (`http://api.weatherapi.com/v1/search.json?Key=7bdfcbd5dcd64568bd561717232606&q=${location}`);
        const location_data = await response.json();
        console.log (location_data);
    }
    catch(error){
        alert("Error: " + error);

    }
}

async function getWeather (location) {
    try {
        const response = await fetch (`http://api.weatherapi.com/v1/current.json?Key=7bdfcbd5dcd64568bd561717232606&q=${location}`);
        const weather_data = await response.json();
        console.log ("weather data", weather_data);
    }
    catch{
        alert("Error: " + error);
    }
}

getLocation("nairobi");
getWeather("nairobi");