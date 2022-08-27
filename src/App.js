import './App.css'
import CSVReader from 'react-csv-reader'
import { useEffect, useState } from 'react'

function App() {
  const [dataArr, setDataArr] = useState([])

  function handle(data) {
    setDataArr([...data])
    
  }

  const parseOptions = {
    header: true,
    skipEmptyLines: true,
  }

  return (
    <div className="App">
      <div className="uploading">
        <div className="container">
          <div className="uploading__row">
            <div className="uploading__input">
              <CSVReader
                label="Click me!"
                onFileLoaded={handle}
                parserOptions={parseOptions}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="postList">
        <ul>
          {dataArr.map((item, index) => {
           return <li key={item['uuid']}>[{index}] Summary: {item.Summary}</li>
          } )}
        </ul>
      </div>
    </div>
  )
}

export default App
