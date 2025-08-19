import type React from "react";
import { useState } from "react";

export const Index: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-dvh flex place-items-center place-content-center">
      <button
        className="border w-8"
        onClick={() => setCount((count) => count - 1)}
      >
        -1
      </button>
      <span className="w-8 grid place-items-center">{count}</span>
      <button
        className="border w-8"
        onClick={() => setCount((count) => count + 1)}
      >
        +1
      </button>
    </div>
  );
};
