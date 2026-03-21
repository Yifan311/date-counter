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

  function getDateFromOffset(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date;
  }

  const dayLabel = Math.abs(count) === 1 ? "day" : "days";

  const targetDate = getDateFromOffset(count);
  return (
    <>
      <Step step={step} setStep={setStep} />
      <Count count={count} step={step} setCount={setCount} />
      <DateDisplay dayLabel={dayLabel} targetDate={targetDate} count={count} />
    </>
  );
}

function Step({ step, setStep }) {
  return (
    <div>
      <button
        onClick={() => {
          setStep((s) => (s > 1 ? s - 1 : s));
        }}
      >
        -
      </button>
      <span>Step: {step}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
    </div>
  );
}

function Count({ count, step, setCount }) {
  return (
    <div>
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount((c) => c + step)}>+</button>
    </div>
  );
}

function DateDisplay({ count, targetDate, dayLabel }) {
  let message;
  if (count === 0) {
    message = "Today is ";
  } else if (count > 1) {
    message = `${Math.abs(count)} ${dayLabel} from today is `;
  } else {
    message = `${Math.abs(count)} ${dayLabel} ago was `;
  }
  return (
    <div>
      <p>
        {message}
        {targetDate.toLocaleDateString("en-AU", {
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
