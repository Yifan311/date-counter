import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function addDays(count) {
    var date = new Date();
    date.setDate(date.getDate() + count);
    return date;
  }
  const oneDay = count === 1 || count === -1 ? "day" : "days";
  return (
    <>
      <div>
        <button
          onClick={() => {
            step > 1 && setStep(step - 1);
          }}
        >
          -
        </button>
        <span>Step:{step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div>
        <p>
          {count === 0
            ? "Today is "
            : count === 1
              ? `${count} day from today is `
              : count > 1
                ? `${Math.abs(count)} ${oneDay} from today is `
                : `${Math.abs(count)} ${oneDay} ago was `}
          {addDays(count).toLocaleDateString("en-AU", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </>
  );
}

export default App;
