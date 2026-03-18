import React, { useEffect } from "react";

const CounterEffect = () => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    document.title = `increment ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};
export default CounterEffect;
