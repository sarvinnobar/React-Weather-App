import "./weatherInfo.css";
import { To24 } from "../../utils/convertTime";
import Card from "../card/Card";

export default function WeatherInfo({ weather }) {
  return (
    <div>
      {typeof weather.main !== "undefined" ? (
        <div className="weatherInfo__div">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <p>{weather.name}</p>
          <p>{Math.trunc(weather.main.temp)}°C</p>
          <p className="weatherInfo__p--desc">{weather.weather[0].main}</p>

          <Card>
            <div>
              <p>sunrise:</p>
              <p>{To24(weather.sys.sunrise)}</p>
            </div>
            <div>
              <p>sunset:</p>
              <p>{To24(weather.sys.sunset)}</p>
            </div>
            <div>
              <p>wind:</p>
              <p>{weather.wind.speed}km/h</p>
            </div>
            <div>
              <p>humidity:</p>
              <p>{weather.main.humidity}%</p>
            </div>
          </Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
