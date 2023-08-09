import "./WeatherOfDay.css"
import "./responsive.css"

const WeatherOfDay: React.FC<{ day: string, condition_img: string, temp: string }> = (props) => {
    return (
        <div className="weatherofday">
            <div className="day">{props.day.substring(0, 3)}</div>
            <div className="condition-img"><img src={props.condition_img} alt="" /></div>
            <div className="temp-of-day">{props.temp}&deg;</div>

        </div>
    )
}
export default WeatherOfDay