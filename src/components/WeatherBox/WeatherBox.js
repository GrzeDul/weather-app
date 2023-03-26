import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [pending, setPending] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const handleCityChange = useCallback((cityName) => {
    setFetchError(false);
    setPending(true);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${'6ae210aa95990981e4876e0614403946'}&units=metric`
    ).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          setWeatherData({
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main,
          });
          setPending(false);
        });
      } else {
        setFetchError(true);
        setPending(false);
        setWeatherData(null);
      }
    });
  });
  return (
    <section>
      <PickCity action={handleCityChange} />
      {weatherData && !pending && <WeatherSummary weatherData={weatherData} />}
      {pending && <Loader />}
      {fetchError && <ErrorBox />}
    </section>
  );
};

export default WeatherBox;
