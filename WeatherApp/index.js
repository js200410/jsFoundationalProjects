
const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

const btn = document.getElementById('searchBtn')
const cityInput = document.getElementById('cityInput')
async function fetchWeather (){
	const cityName = cityInput.value.trim()
	if(cityName){
		const fullUrl = `${url}?q=${cityName}&appid=${apiKey}&units=metric`
		try{
			const response =  await fetch(fullUrl)
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
document.getElementById('cityInput').addEventListener("keydown",(e)=>{
	if(e.key === "Enter"){
		fetchWeather()
	}
})
		function displayWeatherData(data){
			const {wind,main} = data
			document.getElementById('cityName').innerHTML=`${cityInput.value.trim()}`
			document.getElementById('temp-data').innerHTML=` temperature:${main["temp"]}°C`
			document.getElementById('humidity-data').innerHTML=`humidity:${main["humidity"]}%`
			document.getElementById('feels_like-data').innerHTML= `feels like : ${main["feels_like"]}`
			document.getElementById('wind-speed-data').innerHTML=`wind-speed: ${wind.speed} km/hr`
		}
