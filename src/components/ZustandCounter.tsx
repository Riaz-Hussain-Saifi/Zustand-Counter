"use client"; 

import React from "react"
import { useCountStore } from "./stores/CountStore" // Import Zustand store
import { Button } from "./ui/button";


/**
 * This component displays the current count and control Buttons.
 * It's responsive and styled with TailwindCSS for a colorful UI.
 */
export default function CounterDisplay() {

  // Extract state and functions from the Zustand store
  const count = useCountStore((state) => state.count)
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)
  const reset = useCountStore((state) => state.reset)

  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-2xl rounded-2xl p-6 m-5 mt-8 text-center border border-green-300">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">🧮 Zustand Counter</h2>
      <p className="text-4xl font-bold text-blue-700 mb-6">{count}</p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          ➕ Increment
        </Button>

        <Button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          ➖ Decrement
        </Button>

        <Button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          🔄 Reset
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        This count is saved automatically. Refresh the page and it stays the same! 🎉
      </p>
    </div>
  )
}
