# weatherapp
<h1>Weather app for react js</h1>


online demo:
https://reactweathercard.netlify.app/

if you won't make one, dont forget to import css file.

|    property   |              type              | default  |                                                                   description                                                                  |
|:-------------:|:------------------------------:|----------|:----------------------------------------------------------------------------------------------------------------------------------------------:|
| apiKey        | String                         |          | API key for fetch request already added a free api key from www.openweathermap.org,  not required but highly recomended to add your own apikey |
| defaultSearch | String                         |          | default search place for weather card                                                                                                          |
| units         | "metric","standard","imperial" | "metric" | units of the weather                                                                                                                           |
| lang          | String                         | "en"     | Language of weather description                                                                                                                |
| closeInput     | Boolean                        | false    | closing the searh input                                                                                                                        |
#### Basic Example

``` js
import "reactweathercard/dist/index.css" // dont forget to import css 
import ExampleComponent from 'reactweathercard'
const App = () => {
  return <div className="container">
    <ExampleComponent />
  </div>
}
export default App
```

#### With Props
```js
import React, { useState } from 'react'
import "reactweathercard/dist/index.css"
import ExampleComponent from 'reactweathercard'
const langs = ["en", "de", "ar", "zh"];
const units = ["metric", "standard", "imperial"];

const App = () => {
  const [lang, setLang] = useState("en")
  
  const [unit, setUnit] = useState("metric")
  
  const [closeInput, setCloseInput] = useState(false)
  
  return <div className="container">
  
    <div className="mt-5">
      <form>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-3">
          
            <label for="lang">Chose Language</label>
            <select id="lang" className="form-control" onChange={(e) => setLang(e.target.value)}>
              {langs.map(lg => <option value={lg}>{lg}</option>)}
            </select>
            
          </div>
          <div className="form-group col-md-3">
          
            <label for="metric">Chose Metrics</label>
            <select id="metric" className="form-control" onChange={(e) => setUnit(e.target.value)}>
              {units.map(u => <option value={u}>{u}</option>)}
            </select>
            
          </div>
          <div className="form-group col-md-3">
          
            <label for="closeInput">Close Input</label>
            <select id="closeInput" className="form-control" onChange={(e) => setCloseInput(e.target.value)}>
              <option value={true}>close</option>
              <option value={false}>open</option>
            </select>
            
          </div>
        </div>
      </form>
    </div>
    
    <ExampleComponent lang={lang} units={unit} defaultSearch="istanbul" closeInput={closeInput} />
    
  </div>
}

export default App
```

Works with using www.openweathermap.org weather api.
