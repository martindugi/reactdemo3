import "./App.css"
import "./components/Book"
import Order from "./components/Order"
import "./components/AllOS"
import AllOS from "./components/AllOS"
import { useState } from "react";
//import { counter } from "./constants/global"

// our main component
const App = () => {

  const [counter, setCounter] = useState(0)
 
  //console.info(OSs[0].image);

  // Increase # of selected OS
  const increaseOne = (counter) => {
    setCounter(counter + 1)
  }

  // Decrease # of selected OS
  const decreaseOne = (counter) => {
    setCounter(counter - 1)
  }
  
  return (
    <div>
    <div className="App">
    <h1>Please select OS type(s): {counter} selected</h1>
    </div>
    <div className="OSs">            
      <AllOS increase={() => increaseOne(counter)} decrease={() => decreaseOne(counter)}/>
    </div>
    <div>
    <Order counter={counter}/>
    </div>
    </div>
  )
}
export default App