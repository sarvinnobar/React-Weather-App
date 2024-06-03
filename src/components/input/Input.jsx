import "./input.css";

export default function Input({ getCity, getWeather }) {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="input__div">
      <h1>Enter a city name:</h1>
      <form onSubmit={onFormSubmit}>
        <section>
          <div>
            <input
              type="text"
              placeholder="London..."
              onChange={getCity}
            ></input>
          </div>
          <div>
            <button onClick={getWeather}>Search</button>
          </div>
        </section>
      </form>
    </div>
  );
}
