import WeatherOfDay from './WeatherOfDay'
import "./WeatherReport.css";
import "./responsive.css";

const WeatherReport: React.FC<{ weather: any }> = (props) => {
    console.log(props.weather)
    const formattedDate = new Date(props.weather.location.localtime).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    });
    const formattedDay = (date: string) => {
        return (
            new Date(date).toLocaleDateString("en-US", {
                weekday: "long"
            })
        )
    }

    return (
        <div className="weather_card">
            <div className='TodayWeather'>
                <div className='date&place'>
                    <div className="date">{formattedDate}</div>
                    <div className="location_name">{`today in ${props.weather.location.name},${props.weather.location.region}`}</div>
                    
                </div>
                <div className='conditionImage&text'>
                <div className="ConditionImage"><img src={props.weather.current.condition.icon} alt="" /></div>
                <div className="conditionText">{props.weather.current.condition.text}</div>
                </div>
                <div className='Total_temp'>
                    <div className="temp">{props.weather.current.temp_c}&deg;C</div>
                    <div className="feels_like_temp">Feels like {props.weather.current.feelslike_c}&deg;C</div>
                </div>
            </div>
            <div className="FutureWeather">
                <p>Next 7 days....</p>
                <div className='eachday'>{props.weather.forecast.forecastday.map((eachday: any) => {
                    return (
                        <WeatherOfDay
                            day={formattedDay(eachday.date)}
                            condition_img={eachday.day.condition.icon}
                            temp={eachday.day.avgtemp_c}
                        ></WeatherOfDay>
                    )
                }
                )}</div>
            </div>

        </div>
    )
}
export default WeatherReport