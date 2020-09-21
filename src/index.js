
import React, { useState, useEffect } from 'react'
import { fetchWeather } from "./api/fetchWeather"
import styles from './styles.css'
function App({ defaultSearch, units, lang, apiKey, searchText, closeInput }) {
  const [query, setQuery] = useState(defaultSearch)
  const [weather, setWeather] = useState({})

  useEffect(() => {
    if (defaultSearch) {
      fetchData()
    }
  }, [defaultSearch])
  useEffect(() => {

  }, [closeInput])
  console.log("stylesss")
  console.log(styles)
  const search = e => {
    if (e.key == 'Enter') {
      fetchData()
    }
  }
  const fetchData = async () => {
    const data = await fetchWeather(query, units, apiKey, lang);
    setQuery('')
    setWeather(data)
  }
  return (
    <div className={styles["main-container"]}>
      {
        closeInput == false ? <input
          type="text"
          className={styles["search"]}
          placeholder={searchText}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
        />
          : null
      }
      {weather.main && (
        <div className={styles["city"]}>
          <h2 className={styles["city-name"]}>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className={styles["city-temp"]}>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className={styles["info"]}>
            <img className={styles["city-icon"]} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

App.defaultProps = {
  apiKey: "0abfcdceb71a6a466de8d0a77256b8ae",
  defaultSearch: "",
  units: "metric",
  lang: "en",
  searchText: "Search",
  closeInput: false
}

App.propTypes = {
  lang: String,
  apiKey: String,
  units: String,
  defaultSearch: String,
  searchText: String,
  closeInput: Boolean
}
export default App;
