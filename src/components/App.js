import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or page initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to My Website</h1>
          <p>This is the main content of the page.</p>
        </div>
      )}
    </div>
  );
}

export default App;
