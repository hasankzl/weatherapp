const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query, units, apiKey, lang) => {
  const urlWithParams = URL + `?q=${query}&units=${units}&lang=${lang}&APPID=${apiKey}`

  const data = await fetch(urlWithParams).then(response => response.json());
  return data;
}

