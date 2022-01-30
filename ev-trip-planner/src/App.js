import MyComponent from "./maps"
import "./App.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <header>
        <h1>ChargeNearby</h1>
      </header>
      <div className="map">
        <MyComponent />
      </div>
    </div>
  )
}

export default App
