import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';
import PropTypes from 'prop-types';

import { useState } from 'react';

const PickCity = ({ action }) => {
  const [city, setCity] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    action(city);
    setCity('');
  };

  return (
    <form className={styles.pickCityForm} onSubmit={handleFormSubmit}>
      <label>
        <TextInput
          placeholder='Enter city name....'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <Button>Search</Button>
    </form>
  );
};

PickCity.propTypes = {
  action: PropTypes.func.isRequired,
};
export default PickCity;
