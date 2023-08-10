import WeatherReport from "../components/WeatherReport";
import WeatherForm from "../components/WeatherForm";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
    const [current, setcurrent] = useState<any>()

    const userdata = async (weatherdata: string) => {
        console.log(weatherdata);
        
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=46fd613d614b46799e253109230208&q=${weatherdata}&days=7&aqi=no&alerts=no`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            else{
                const data = await response.json();
            setcurrent(data);
            }
            
        } catch (error ) {
           toast.error("Enter a valid Location");
        }
    };
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
            <ToastContainer position="top-center"/>
        </div>

    )
}
export default Home;