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
            <label for="lang">Chose Metrics</label>
            <select id="lang" className="form-control" onChange={(e) => setUnit(e.target.value)}>
              {units.map(u => <option value={u}>{u}</option>)}
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="lang">Close Input</label>
            <select id="lang" className="form-control" onChange={(e) => setCloseInput(e.target.value)}>
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
