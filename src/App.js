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
  function calDays(count) {
    var date = new Date();
    date.setDate(date.getDate() + count);
    return date;
  }
  const oneDay = count === 1 || count === -1 ? "day" : "days";
  return (
    <>
      <Step step={step} setStep={setStep} />
      <Count count={count} step={step} setCount={setCount} />
      <DateDisplay oneDay={oneDay} calDays={calDays} count={count} />
    </>
  );
}

function Step({ step, setStep }) {
  return (
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
  );
}

function Count({ count, step, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count - step)}>-</button>
      <span>Count:{count}</span>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  );
}

function DateDisplay({ count, calDays, oneDay }) {
  return (
    <div>
      <p>
        {count === 0
          ? "Today is "
          : count === 1
            ? `${count} day from today is `
            : count > 1
              ? `${Math.abs(count)} ${oneDay} from today is `
              : `${Math.abs(count)} ${oneDay} ago was `}
        {calDays(count).toLocaleDateString("en-AU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
export default App;
