// import React from "react";

// export default function ContactUs() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
//       <p className="text-gray-700">
//         For inquiries, please email demo@example.com.
//       </p>
//     </div>
//   );
// }


// src/pages/Contact-Us.jsx
import React from 'react';

function ContactUs() {
  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Support</h1>
      <p className="text-gray-600 mb-6">
        We are here to help you. Please reach out to us using the contact information below or fill out the form.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Contact Details</h3>
          <p className="text-gray-600">Email: support@hrtracker.com</p>
          <p className="text-gray-600">Phone: +254 7XX XXX XXX</p>
          <p className="text-gray-600">Address: Nairobi, Kenya</p>
        </div>
        
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;