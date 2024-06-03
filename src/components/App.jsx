import { useState } from "react";
import Input from "./input/Input";
import WeatherInfo from "./info/WeatherInfo";
import Container from "./container/Container";
import api from "../services/api/config";

export default function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const fetchWeather = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <>
      <Container>
        <Input
          onChangeArg={(e) => setSearch(e.target.value)}
          onClickArg={fetchWeather}
        />
        <WeatherInfo weather={weather} />
      </Container>
    </>
  );
}
