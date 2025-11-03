// import React from "react";

// const NotFoundPage = () => {
//   return (
//     <div>
//       <h1>404 - Not Found</h1>
//     </div>
//   );
// };

// export default NotFoundPage;


// src/components/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold shadow-lg"
      >
        Go to Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;