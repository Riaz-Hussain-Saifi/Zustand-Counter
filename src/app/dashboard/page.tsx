// Import the CounterDisplay component which uses Zustand
import CounterDisplay from "@/components/ZustandCounter";

/**
 * Dashboard page that renders the Zustand counter component.
 */
// This is the main component for the '/dashboard' route
export default function Dashboard() {
    return (
      // Basic layout for the dashboard page
      <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-800 m-5 mb-6 drop-shadow-md">
        🌟 Welcome to Your Dashboard
      </h1>
        {/* Render the CounterDisplay component */}
        <CounterDisplay />
      </main>
    );
  }