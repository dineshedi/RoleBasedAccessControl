import React from 'react';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("UserRole");

  if (user === "Admin") {
    return children;
  }

  const handleLogout=()=>{
    // localStorage.removeItem("UserRole");
    window.location.href="/";
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex justify-center items-center">
      <div className="text-center bg-white shadow-xl rounded-xl p-8 max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h2>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, you're not authorized to view this page.
        </p>
        <p className="text-sm text-gray-500">
          Please contact an administrator if you believe this is an error.
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProtectedRoute;
