import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [clockInHr, setClockInHr] = useState(0);
  const [clockInMin, setClockInMin] = useState(0);

  function handleClick() {
    console.log('click');
  }

  function handleHrChange(e: React.FormEvent<HTMLInputElement>) {
    setClockInHr(Number(message));
  }

  return (
    <div className="App">
      <section>
        <div className="header">
          <div className="in">Clock In</div>
          <div className="out">Clock Out</div>
          <div className="lunch">Lunch Duration</div>
        </div>
      </section>
      <section>
        <div className="time-slots">
          <div className="in">
            <input
              onChange={handleHrChange}
              type="number"
              value={clockInHr}
            ></input>{' '}
            :{' '}
            <input
              min="1"
              max="59"
              maxLength={2}
              defaultValue="00"
              value={clockInMin}
            ></input>
            <select>
              <option defaultValue="AM">AM</option>
              <option defaultValue="PM">PM</option>
            </select>
          </div>
          <div className="out">
            <input type="number" defaultValue="00"></input> :{' '}
            <input defaultValue="00"></input>
            <select>
              <option defaultValue="AM">AM</option>
              <option defaultValue="PM">PM</option>
            </select>
          </div>
          <div className="lunch">
            <input defaultValue="00"></input> :{' '}
            <input defaultValue="00"></input>
          </div>
        </div>
      </section>
      <section className="time">
        <h1>00:00:00</h1>
      </section>
      <section className="calculate">
        <button onClick={handleClick} className="button-36" role="button">
          Calculate
        </button>
      </section>
    </div>
  );
}

export default App;
