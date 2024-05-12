"use client"
import { useState } from "react";

export default function Home() {
  let number = 1;
      const [count, setCount] = useState(0);
      const increment = () => {
        setCount(count + 1);
      };
      const decrement = () => {
        setCount(count - 1);
      };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-15">
    <h1 className="text-4xl flex justify-center items-center font-bold text-black">
        Counter
      </h1>
      <div className="flex justify-center items-center">
        <button className="text-9xl font-bold text-black" onClick={decrement}>
          -
        </button>
        <h1 className="text-9xl font-bold text-black">{count}</h1>
        <button className="text-9xl font-bold text-black" onClick={increment}>
          +
        </button>
      </div>
    </main>
  );
}
