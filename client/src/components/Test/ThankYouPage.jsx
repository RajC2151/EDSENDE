import React from "react";

const ThankYouPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("payload");
    window.location.reload();
  };
  return (
    <div className="thankyou-container">
      <h1 className="thankyou-title">Thank You!</h1>
      <p className="thankyou-text">
        Your test has been completed successfully.
      </p>
      <p className="thankyou-text">Thank you for participating!</p>
      {/* Add any additional content or styling as needed */}
      <button onClick={handleLogout}>
					Exit Test
				</button>
    </div>
  );
};

export default ThankYouPage;
