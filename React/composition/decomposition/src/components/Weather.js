export default function Weather(props) { // Рендерит блок погоды
    return (
        <div className="block">
            <div className="blockTitle">Погода</div>
            <div className="weatherContainer">
                <span className="mainWeather"><img src={props.icon} alt="weather_img" /> <span className="mainWeather">+{props.weather.now}</span></span>
                <span className="additionalWeather">
                    <div>Утром +{props.weather.morning},</div>
                    <div>днём +{props.weather.day}</div>
                </span>
            </div>
        </div>
    )
}