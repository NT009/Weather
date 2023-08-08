import WeatherReport from "../components/WeatherReport";
import WeatherForm from "../components/WeatherForm";
import { useState } from "react";
function Home() {
    const [current, setcurrent] = useState<any>()

    const userdata = (weatherdata: string) => {
        console.log(weatherdata)
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=46fd613d614b46799e253109230208&q=${weatherdata}&days=7&aqi=no&alerts=no`)
            .then(response => response.json())
            .then((data) => {
                setcurrent(data);
            })
            .catch((error) => console.log("Error", error));
    }
    // useEffect(() => {
    //     console.log("current state:", current); // Log the current state whenever it changes
    // }, [current]);
    return (
        <div>
            <WeatherForm Formdata={userdata} />
            {current ? (
                <WeatherReport weather={current}/>
            ) : (
                <p></p>
            )}
        </div>

    )
}
export default Home;