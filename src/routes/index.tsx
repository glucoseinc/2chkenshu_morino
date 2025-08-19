import type React from "react";
import { useState } from "react";

export const Index: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>-1</button>
      <span>{count}</span>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
    </div>
  );
};
