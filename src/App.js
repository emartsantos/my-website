import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 w-full text-center text-white text-2xl font-bold">
        My Simple React Website
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Welcome to My Website!
        </h1>
        <p className="text-gray-600 text-lg">
          This is a simple website built with React and styled with Tailwind
          CSS.
        </p>
      </main>
      <footer className="bg-gray-800 text-white p-4 w-full text-center text-sm">
        © {new Date().getFullYear()} My Website
      </footer>
    </div>
  );
}

export default App;
