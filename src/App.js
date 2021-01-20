import './App.css';
import {useState} from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [laskelma, setLaskelma] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    const bmi = weight / (height * height);
    setLaskelma(bmi);

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
        <label>BMI </label>
        <output>{laskelma}</output>
        </div>
        <button>calculate</button>
      </form>
    </div>
  );
}

export default App;
