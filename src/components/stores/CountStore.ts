// Import 'create' from Zustand to create the store
import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Zustand store to manage counter value across the app.
 * Includes increment, decrement, and reset functions.
 * Uses localStorage to persist the state after refresh.
 */
// Define the shape of our state
type CountState = {
  count: number; // Holds the current count
  increment: () => void; // Function to increase count
  decrement: () => void; // Function to decrease count
  reset: () => void; // Function to reset count
};

// Create and export the store hook with `persist` middleware to save data in localStorage
export const useCountStore = create<CountState>()(
  persist(
    (set) => ({
      count: 0, // Initial count value
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "count-storage", // key name in localStorage
    }
  )
);
