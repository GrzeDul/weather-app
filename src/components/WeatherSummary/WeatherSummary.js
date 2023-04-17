import styles from './WeatherSummary.module.scss';
import PropTypes from 'prop-types';

const WeatherSummary = ({ weatherData }) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={weatherData.description}
        src={`${process.env.
          PUBLIC_URL}/images/weather-icons/${weatherData.icon}.png`}
      />
      <div className={styles.weatherInfo}>
        <h2>{weatherData.name}</h2>
        <p>
          <strong>Temp:</strong> {weatherData.temp}
        </p>
      </div>
    </section>
  );
};

WeatherSummary.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default WeatherSummary;
