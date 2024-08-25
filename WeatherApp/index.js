url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd01483acbmsh602e17cd80a3e07p1e3073jsn8827649468b9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const btn = document.getElementById('searchBtn')
const cityInput = document.getElementById('cityInput')
async function fetchWeather (){
	const cityName = cityInput.value.trim()
	if(cityName){
		const fullUrl = url+cityName
		try{
			const response =  await fetch(fullUrl,options)
			if (!response.ok){
				throw new Error(`http error ! ${response.status}`);
			}
			const data = await response.json()
			displayWeatherData(data)
		}catch(error){
			console.log("error occured",error)
		}
	}
	else{
		console.log("error occured")
	}
}

btn.addEventListener('click',()=>{
	fetchWeather()
})
		function displayWeatherData(data){
			document.getElementById('cityName').innerHTML=`${cityInput.value.trim()}`
			document.getElementById('temp-data').innerHTML=` temperature:${data.temp}°C`
			document.getElementById('humidity-data').innerHTML=`humidity:${data.humidity}%`
			document.getElementById('feels_like-data').innerHTML= `feels like : ${data.feels_like}`
			document.getElementById('wind-speed-data').innerHTML=`wind-speed: ${data.wind_speed} km/hr`
		}
