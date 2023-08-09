import { useState } from "react";
import "./WeatherForm.css"
import "./responsive.css"


const WeatherForm: React.FC<{ Formdata: (text: string) => void }> = (props) => {
    const [city, setCity] = useState("");
    function cityhandler(event: React.ChangeEvent<HTMLInputElement>) {
        setCity(event.target.value)

    }
    const weatherHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.Formdata(city)
        setCity("")
    }
    return (
        <div className="LocationForm">

            <form onSubmit={weatherHandler}>
                {/* <div className="location" ><label>Location</label></div> */}
                <div className="location-input">
                    <input type="text" value={city} onChange={cityhandler} placeholder="Enter the Location here"/></div>
                <div className="formbutton"><button type="submit" >get weather</button></div>


            </form>
        </div>
    )
}
export default WeatherForm