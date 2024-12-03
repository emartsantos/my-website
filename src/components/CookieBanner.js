import React, { useState, useEffect } from "react";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 flex flex-col sm:flex-row sm:justify-between items-center gap-4 z-50">
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold">We Value Your Privacy</h2>
        <p className="text-sm">
          This website uses cookies to enhance your experience. By continuing to
          use this site, you accept our cookie policy.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleAccept}
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
