import { DataT } from './WeatherApp';

type WeatherDataProps = {
	data: DataT;
};
export default function WeatherData({ data }: WeatherDataProps) {
	function getWeatherType(type: string) {
		switch (type) {
			case 'Clear':
				return 'img/clear.png';
			case 'Clouds':
				return 'img/clouds.png';
			case 'Rain':
				return 'img/rain.png';
			case 'Snow':
				return 'img/snowy.png';
			default:
				return 'img/suncloudy.png';
		}
	}
	function getDate() {
		return new Date().toLocaleDateString('en-us', {
			weekday: 'long',
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		});
	}
	return (
		<>
			<div className="bg-white p-3 mt-5 grid place-items-center pb-10">
				<div>{getDate()}</div>
				<div className="p-3">
					<img
						className="w-72"
						src={getWeatherType(data.weather[0].main)}
						alt=""
					/>
				</div>
				<span className="text-5xl font-bold">{data.name}</span>
				<span className="text-3xl font-bold">{data.main.temp} °C</span>
				<span>
					{data.weather[0].main} with {data.weather[0].description}
				</span>
				<span>Windspeed: {data.wind.speed} km/h</span>
				<span>Humidity:{data.main.humidity} %</span>
			</div>
		</>
	);
}
